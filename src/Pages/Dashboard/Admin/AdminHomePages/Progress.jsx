
const Progress = () => {
    return (
      <div className="p-4 lg:p-8">
        <h1 className="mb-10 lg:text-4xl text-2xl text-center font-bold">
          Work Progress
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-lg border transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center">
              <div
                className="radial-progress text-blue-500"
                style={{ "--value": 83, "--size": "150px", "--thickness": "10px" }}
                role="progressbar"
              >
                83%
              </div>
            </div>
            <p className="text-center mt-4 text-lg font-medium">Project Complete</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg border transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center">
              <div
                className="radial-progress text-green-500"
                style={{ "--value": 85, "--size": "150px", "--thickness": "10px" }}
                role="progressbar"
              >
                85%
              </div>
            </div>
            <p className="text-center mt-4 text-lg font-medium">Team Response</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg border transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center">
              <div
                className="radial-progress text-red-500"
                style={{ "--value": 90, "--size": "150px", "--thickness": "10px" }}
                role="progressbar"
              >
                90%
              </div>
            </div>
            <p className="text-center mt-4 text-lg font-medium">Working Time</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Progress;
  