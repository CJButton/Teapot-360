import classNames from "classnames";
import Image from "next/image";

const Arrow = ({
  className = "",
  isReversed = false,
}: {
  className?: string;
  isReversed?: boolean;
}) => {
  return (
    <div
      className={classNames(
        "absolute z-10 top-1/2 cursor-pointer",
        {
          "rotate-180": isReversed,
        },
        className
      )}
    >
      <Image
        src="/arrow.svg"
        alt={`Arrow ${isReversed ? "Left" : "Right"}`}
        width={50}
        height={20}
      />
    </div>
  );
};

export default Arrow;
