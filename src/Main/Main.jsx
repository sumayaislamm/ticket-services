import Progress from "./Status/Progress";
import Resolved from "./Status/Resolved";
import Tickets from "./Tickets/Tickets";

export default function Main({ progress, resolved, handleProgress, handleComplete, tickets }) {
    return (
        <main className="grid p-10 gap-6 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <Tickets tickets={tickets} handleProgress={handleProgress} />
            </div>

            <div className="lg:col-span-1 space-y-6">
                <Progress tickets={progress} handleComplete={handleComplete} />
                
                <Resolved tickets={resolved} />
            </div>
        </main>
    )

}