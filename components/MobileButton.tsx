import { MenuAlt2Icon } from "@heroicons/react/outline";

const MobileButton = ({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <div className="fixed bottom-0 right-0 z-10 flex-shrink-0 flex h-16">
      <button
        type="button"
        className="px-4 border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default MobileButton;
