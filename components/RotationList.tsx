import { useRouter } from "next/router";
import useTeapotiumStore from "../stores/teapotiumStore";
import Card from "./Card";

const RotationList = () => {
  const router = useRouter();

  const { frames } = useTeapotiumStore();

  const handleClick = (id: number) => {
    router.push((id + 1).toString());
  };

  return (
    <>
      {frames.map((frame, idx) => {
        return (
          <div key={frame.uri} onClick={() => handleClick(idx)}>
            <Card frameNumber={idx} />
          </div>
        );
      })}
    </>
  );
};

export default RotationList;
