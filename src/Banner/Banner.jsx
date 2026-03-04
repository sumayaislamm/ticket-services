export default function Banner() {
    return (
        
            <div className="lg:flex w-full h-[200px] justify-center text-center lg:gap-12 mt-6">
                <div className="card bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg  shadow-lg w-96 shadow-sm">
                    <div className="card-body">
                        <h1 className="text-2xl">In-Progress</h1>
                        <p className="text-4xl">0</p>
                        
                    </div>
                </div>
                <div className="card text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg w-96 shadow-sm">
                    <div className="card-body">
                        <h1  className="text-2xl">Resolved</h1>
                        <p className="text-4xl ">0</p>
                        
                    </div>
                </div>
            </div>
        
    )
}