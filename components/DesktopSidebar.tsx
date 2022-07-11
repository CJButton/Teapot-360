import RotationList from "./RotationList";

const DesktopSidebar = () => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto pr-5 pl-5">
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            <h3 className="text-lg font-bold">Teapotium</h3>
            <p className="text-md font-bold">
              A 360 model of multiple teapots melded into one
            </p>
            <div className="pt-5">
              <RotationList />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
