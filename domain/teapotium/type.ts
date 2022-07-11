export type Frame = {
  uri: string;
  hotspots: {
    uri: string;
    ids: number[];
  };
};

type Teapotium = {
  width: number;
  height: number;
  name: string;
  description: string;
  clockwise: boolean;
  frames: Frame[];
};

export default Teapotium;
