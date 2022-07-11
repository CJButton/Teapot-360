import useSWR, { Fetcher } from "swr";
import ImageHost from "../../services/ImageHost";
import Teapotium from "./../../domain/teapotium/type";

const TEAPOT_URL = ImageHost + "/teapotium";

const fetcher: Fetcher<Teapotium, string> = async (
  url: string
): Promise<any> => {
  return await fetch(url).then((data) => data.json());
};

const useTeapot = () => {
  const { data, error } = useSWR(TEAPOT_URL, fetcher);

  return { data, error };
};

export default useTeapot;
