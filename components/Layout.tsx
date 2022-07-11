import { useEffect, ReactElement, useState } from "react";
import useTeapot from "../pages/api/useTeapot";
import useTeapotiumStore from "../stores/teapotiumStore";
import { Spinner } from "./Loader";
import fetchTeapotImages from "../pages/api/fetchTeapotImages";
import Teapotium from "../domain/teapotium/type";
import Head from "next/head";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";
import MobileButton from "./MobileButton";

const Layout = ({ children }: { children: ReactElement }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data, error } = useTeapot();
  const { hotspots, setTeapotiumState, setImages } = useTeapotiumStore();

  useEffect(() => {
    const getImages = async (data: Teapotium) => {
      const { teapots, hotspots } = await fetchTeapotImages(data);
      setImages({ teapots, hotspots });
      setTeapotiumState(data);
    };

    if (data) {
      getImages(data);
    }
  }, [data, setTeapotiumState, setImages]);

  if (error) {
    return <div>Uh oh!</div>;
  }

  if (!hotspots.length) {
    return (
      <section className="absolute top-1/2 left-1/2">
        <Spinner />
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>360 degree teapot viewer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <DesktopSidebar />
      {children}
      <MobileButton setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

export default Layout;
