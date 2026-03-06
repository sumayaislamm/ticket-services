export default function Banner({ progressCount, resolvedCount }) {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 justify-center items-center lg:gap-12 mx-auto my-6">

      <div className="relative card text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg w-96 overflow-hidden">

        <img
          src="/vector1.png"
          className="absolute left-0 top-0 h-full w-1/3 object-cover"
        />

        <img
          src="/vector1.png"
          className="absolute right-0 top-0 h-full w-1/3 object-cover scale-x-[-1]"
        />
        <div className="card-body">
          <h1 className="text-2xl text-white">In-Progress</h1>
          <p className="text-4xl text-white">{progressCount}</p>
        </div>
      </div>

      <div className="relative card text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg w-96 overflow-hidden">

        <img
          src="/vector1.png"
          className="absolute left-0 top-0 h-full w-1/3 object-cover"
        />

        <img
          src="/vector1.png"
          className="absolute right-0 top-0 h-full w-1/3 object-cover scale-x-[-1]"
        />
        <div className="card-body">
          <h1 className="text-2xl text-white">Resolved</h1>
          <p className="text-4xl text-white">{resolvedCount}</p>
        </div>
      </div>

    </div>
  );
}