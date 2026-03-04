import Status from "./Status/Status";
import Tickets from "./Tickets/Tickets";

export default function Main() {
    return (
        <main className="flex p-10 lg:flex-row flex-col gap-4  justify-between">
            <div className="w-full lg:w-2/3">
                <Tickets />
            </div>
            <div className="w-full lg:w-1/3">
                <Status />
            </div>
        </main>
    )

}