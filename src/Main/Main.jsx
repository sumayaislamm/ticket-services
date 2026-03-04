import Progress from "./Status/Progress";
import Resolved from "./Status/Resolved";
import Tickets from "./Tickets/Tickets";

export default function Main({ progress, resolved, handleProgress, handleComplete }) {
    return (
        <main className="flex p-10 lg:flex-row flex-col gap-4  justify-between">
            <div className="w-full lg:w-2/3">
                <Tickets handleProgress={handleProgress} />
            </div>
            {/* <div className="w-full lg:w-1/3">
                <Status />
            </div> */}

            <div className="w-full lg:w-1/3 space-y-6">
                <Progress tickets={progress} handleComplete={handleComplete} />
                <Resolved tickets={resolved} />
            </div>
        </main>
    )

}