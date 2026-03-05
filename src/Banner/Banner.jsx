export default function Banner({ progressCount, resolvedCount }) {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 justify-center items-center lg:gap-12 mx-auto my-6">

      <div
        className="card text-center p-6 rounded-lg shadow-lg w-96"
        style={{
          backgroundImage:
            "url('../../public/vector1.png'), url('../../public/vector2.png'), linear-gradient(to right, #4ade80, #3b82f6, #a855f7)",
          backgroundPosition: "left center, right center, center",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundSize: "70px, 70px, cover"
        }}
      >
        <div className="card-body">
          <h1 className="text-2xl text-white">In-Progress</h1>
          <p className="text-4xl text-white">{progressCount}</p>
        </div>
      </div>

      <div
        className="card text-center p-6 rounded-lg shadow-lg w-96"
        style={{
          backgroundImage:
            "url('../../public/vector1.png'), url('../../public/vector2.png'), linear-gradient(to right, #4ade80, #3b82f6, #a855f7)",
          backgroundPosition: "left center, right center, center",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundSize: "70px, 70px, cover"
        }}
      >
        <div className="card-body">
          <h1 className="text-2xl text-white">Resolved</h1>
          <p className="text-4xl text-white">{resolvedCount}</p>
        </div>
      </div>

    </div>
  );
}