import FrameTag from "./FrameTag";
import Image from "next/image";
import useTeapotiumStore from "../stores/teapotiumStore";

type Props = {
  frameNumber: number;
};

const Card = ({ frameNumber }: Props) => {
  const { teapots, name } = useTeapotiumStore();

  return (
    <div
      className={
        "cursor-pointer max-w-sm bg-white rounded-lg shadow-md dark:bg-sky-800 dark:border-gray-700 relative mt-5"
      }
    >
      <FrameTag frameNumber={frameNumber + 1} totalFrames={teapots.length} />
      <Image
        className="rounded-t-lg w-full"
        src={teapots[frameNumber]}
        alt={`Teapot preview at ${frameNumber + 1} rotation`}
        width="200px"
        height="150px"
      />
      <div className="px-5 pb-5 mt-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex justify-between items-center">
          <span className="text-mt font-bold text-gray-900 dark:text-white">
            {`${frameNumber + 1}% Rotation`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
