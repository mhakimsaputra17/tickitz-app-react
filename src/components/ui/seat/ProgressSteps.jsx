const ProgressSteps = ({ currentStep }) => {
  return (
    <div className="max-w-6xl mx-auto mb-6">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
              currentStep >= 1 ? "bg-green-600" : "bg-gray-400"
            }`}
          >
            {currentStep > 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <span className="font-medium">1</span>
            )}
          </div>
          <span className="text-sm mt-1">Dates And Time</span>
        </div>

        <div className="w-16 h-0.5 bg-gray-300"></div>

        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
              currentStep >= 2
                ? currentStep > 2
                  ? "bg-green-600"
                  : "bg-blue-600"
                : "bg-gray-400"
            }`}
          >
            {currentStep > 2 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <span className="font-medium">2</span>
            )}
          </div>
          <span className="text-sm mt-1">Seat</span>
        </div>

        <div className="w-16 h-0.5 bg-gray-300"></div>

        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
              currentStep >= 3 ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            <span className="font-medium">3</span>
          </div>
          <span
            className={`text-sm mt-1 ${currentStep < 3 ? "text-gray-400" : ""}`}
          >
            Payment
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
