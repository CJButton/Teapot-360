export function Spinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      data-icon="spinner"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

export interface ProgressProps {
  // Value between 0 and 1
  progress: number;
}

export function Progress({ progress }: ProgressProps) {
  return (
    <>
      <div className="mb-1 text-base font-medium dark:text-white">Small</div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-500">
        <div
          className="bg-sky-600 h-1.5 rounded-full"
          style={{
            width: `${Math.min(Math.max(0, progress) * 100, 100)}%`,
          }}
        ></div>
      </div>
    </>
  );
}
