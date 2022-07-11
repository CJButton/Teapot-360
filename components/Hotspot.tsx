import Image from "next/image";
import useTeapotiumStore from "../stores/teapotiumStore";

const Hotspot = () => {
  const { hotspots } = useTeapotiumStore();

  if (!hotspots.length) {
    return null;
  }

  return (
    <>
      {hotspots.map((hotspot, idx) => {
        return (
          <Image
            key={hotspot}
            className="hotspot-wrapper absolute top-0 z-100 aspect-4/3 w-full object-cover h-screen"
            src={hotspot}
            layout="fill"
            alt={`Hotspot overlay at ${idx}%`}
          />
        );
      })}
    </>
  );
};

export default Hotspot;
