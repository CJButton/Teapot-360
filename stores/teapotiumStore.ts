import create from "zustand";
import Teapotium, { Frame } from "../domain/teapotium/type";

type TeapotiumState = {
  frames: Frame[];
  name: string;
  setTeapotiumState: (data: Teapotium) => void;
  teapots: string[];
  hotspots: string[];
  setImages: ({
    teapots,
    hotspots,
  }: {
    teapots: string[];
    hotspots: string[];
  }) => void;
};

const useTeapotiumStore = create<TeapotiumState>((set) => ({
  frames: [],
  name: "",
  setTeapotiumState: (data) =>
    set({
      frames: data.frames,
      name: data.name,
    }),
  teapots: [],
  hotspots: [],
  setImages: ({ teapots, hotspots }) => set({ teapots, hotspots }),
}));

export default useTeapotiumStore;
