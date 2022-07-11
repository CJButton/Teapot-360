import { useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import FrameTag from "../components/FrameTag";
import useTeapotiumStore from "../stores/teapotiumStore";
import Arrow from "../components/Arrow";
import Hotspot from "../components/Hotspot";

const STOP = "stop";
const RIGHT = "right";
const LEFT = "left";

const Home: NextPage = () => {
  const router = useRouter();
  const { id = "1" } = router.query as { id: string };

  const [direction, setDirection] = useState<string>("");

  const { teapots } = useTeapotiumStore();

  const allTeapots = useMemo(
    () => document.getElementsByClassName("teapot-wrapper"),
    []
  ) as HTMLCollectionOf<HTMLImageElement>;
  const allHotspots = useMemo(
    () => document.getElementsByClassName("hotspot-wrapper"),
    []
  ) as HTMLCollectionOf<HTMLImageElement>;

  // Instantiates Hotspots
  useEffect(() => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "hotspot-images-wrapper");
    const wrapper = document.getElementById("images-wrapper");
    wrapper?.appendChild(newDiv);

    ReactDOM.render(
      <Hotspot />,
      document.getElementById("hotspot-images-wrapper")
    );
  }, [allHotspots, allTeapots]);

  // Inital settings upon ID change
  useEffect(() => {
    if (allHotspots.length) {
      for (let idx = 0; idx < allHotspots.length; idx++) {
        allTeapots[idx].style.opacity = "0";
        allHotspots[idx].style.opacity = "0";
      }
      allTeapots[parseInt(id) - 1].style.opacity = "1";
      allHotspots[parseInt(id) - 1].style.opacity = "1";
    }
  }, [id, allHotspots, allTeapots, allHotspots.length]);

  const isDirectionRight = direction === RIGHT;
  const isDirectionLeft = direction === LEFT;

  // Updating DOM for turning in either direction
  useEffect(() => {
    if (!isDirectionLeft && !isDirectionRight) {
      return;
    }

    let activeIdx = parseInt(id);

    const turnTeapot = () => {
      isDirectionRight ? (activeIdx += 1) : (activeIdx -= 1);

      if (isDirectionRight && activeIdx === allTeapots.length + 1) {
        activeIdx = 1;
      }

      if (isDirectionLeft && activeIdx === 0) {
        activeIdx = allTeapots.length;
      }

      for (let idx = 0; idx < allTeapots.length; idx++) {
        allTeapots[idx].style.opacity = "0";
        allHotspots[idx].style.opacity = "0";
      }

      allTeapots[activeIdx - 1].style.opacity = "1";
      allHotspots[activeIdx - 1].style.opacity = "1";

      const frameTag = document.getElementById("frame-tag-main") as HTMLElement;
      const rotation = document.getElementById("rotation-main") as HTMLElement;
      const frameTagChild = frameTag?.firstChild as HTMLElement;
      frameTagChild.innerHTML = `Frame ${activeIdx} of ${allTeapots.length}`;

      rotation.innerHTML = `A 360MODEL OF MULTIPLE TEAPOTS MELDED INTO ONE: ${activeIdx}% ROTATION`;
    };

    let timer: NodeJS.Timer;
    if (isDirectionLeft || isDirectionRight) {
      timer = setInterval(() => turnTeapot(), 50);
    }
    return () => {
      clearInterval(timer);
      router.push(activeIdx.toString());
    };
  }, [isDirectionLeft, isDirectionRight, id, router, allHotspots, allTeapots]);

  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <main className="flex-1">
        <div className="justify-center items-center h-screen relative">
          <div id="frame-tag-main">
            <FrameTag frameNumber={parseInt(id)} totalFrames={teapots.length} />
          </div>

          <div className="absolute z-10 w-full top-20 text-white font-bold bg-transparent text-center">
            <h1 className="text-xl">TEAPOTIUM</h1>
            <p id="rotation-main">{`A 360MODEL OF MULTIPLE TEAPOTS MELDED INTO ONE: ${id}% ROTATION`}</p>
          </div>

          <button
            onMouseEnter={() => setDirection(LEFT)}
            onMouseLeave={() => setDirection(STOP)}
          >
            <Arrow isReversed />
          </button>
          <button
            onMouseEnter={() => setDirection(RIGHT)}
            onMouseLeave={() => setDirection(STOP)}
          >
            <Arrow className="right-0" />
          </button>

          <div id="images-wrapper">
            <div>
              {teapots.map((teapot, idx) => {
                return (
                  <Image
                    key={teapot}
                    className="teapot-wrapper absolute top-0 object-cover w-full aspect-4/3 w-full object-cover h-screen"
                    src={teapot}
                    layout="fill"
                    alt={`Teapot at ${idx}%`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
