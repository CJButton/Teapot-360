import { Frame } from "../../domain/teapotium/type";
import ImageHost from "../../services/ImageHost";

const fetchTeapotImages = async ({ frames }: { frames: Frame[] }) => {
  const teapotPromises: Promise<string>[] = [];
  const hotspotPromises: Promise<string>[] = [];

  frames.forEach((frame) => {
    const newPromise = new Promise<string>((resolve) => {
      resolve(
        fetch(ImageHost + frame.uri).then(async (res) => {
          return URL.createObjectURL(await res.blob());
        })
      );
    });

    const hotspotPromise = new Promise<string>((resolve) => {
      resolve(
        fetch(ImageHost + frame.hotspots.uri).then(async (res) => {
          return URL.createObjectURL(await res.blob());
        })
      );
    });

    teapotPromises.push(newPromise);
    hotspotPromises.push(hotspotPromise);
  });

  return {
    teapots: await Promise.all(teapotPromises).then((values) => values),
    hotspots: await Promise.all(hotspotPromises).then((values) => values),
  };
};

export default fetchTeapotImages;
