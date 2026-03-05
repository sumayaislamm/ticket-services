export default function Banner({ progressCount, resolvedCount }) {
    return (
        
            <div className="flex flex-col lg:flex-row w-full gap-5 justify-center items-center lg:gap-12 mx-auto my-6">
                <div className="card text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg  shadow-lg w-96 shadow-sm">
                    <div className="card-body">
                        <h1 className="text-2xl">In-Progress</h1>
                        <p className="text-4xl">{progressCount}</p>
                        
                    </div>
                </div>
                <div className="card text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg w-96 shadow-sm">
                    <div className="card-body">
                        <h1  className="text-2xl">Resolved</h1>
                        <p className="text-4xl">{resolvedCount}</p>
                        
                    </div>
                </div>
            </div>
        
    )
}