type Props = {
  frameNumber: number;
  totalFrames: number;
};

const FrameTag = ({ frameNumber, totalFrames }: Props) => {
  return (
    <span className="absolute z-10 left-0 top-3 bg-blue-100 text-blue-800 text-xs font-semibold ml-0 mr-2 px-2.5 py-0.5 mt-2  dark:bg-blue-200 dark:text-blue-800">
      {`Frame ${frameNumber} of ${totalFrames}`}
    </span>
  );
};

export default FrameTag;
