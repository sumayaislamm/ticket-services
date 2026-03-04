import Status from "./Status/Status";
import Tickets from "./Tickets/Tickets";

export default function Main() {
    return (
        <main className="flex p-10 text-center lg:flex-row flex-col gap-4 items-center justify-center">
            <div>
                <Tickets />
            </div>
            <div>
                <Status />
            </div>
        </main>
    )

}