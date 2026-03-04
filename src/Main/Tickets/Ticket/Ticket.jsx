import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


export default function Ticket({ ticket }) {
    const { id, title, description, customer, priority, status, createdAt, code } = ticket;

    // "id": 1,
    // "title": "Login Issue",
    // "description": "User unable to login with correct credentials.",
    // "customer": "Rahim Uddin",
    // "priority": "High",
    // "status": "open",
    // "createdAt": "2026-03-01"
    return (
        <>
            {/* <div className="border rounded-lg p-4 shadow-md">
                <h2 className="text-lg font-semibold mb-2">Ticket Length: {ticket.length}</h2>
            </div> */}

            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">{title}</h2>
                        <span className="badge badge-outline badge-warning flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            {status}


                            {/* // <div className="badge badge-outline badge-info">Info</div>
// <div className="badge badge-outline badge-success">Success</div>
<div className="badge badge-outline badge-warning">Warning</div> */}
                        </span>
                    </div>

                    <p>{description}</p>
                    <div className="card-actions flex justify-between
                    ">
                        <div>
                            <span className="py-2 mr-4 text-[10px] font-bold">{code} </span>
                            <span className={`font-semibold font-bold ${ticket.priority === "High"
                                    ? "text-red-500"
                                    : ticket.priority === "Medium"
                                        ? "text-green-500"
                                        : "text-blue-500"
                                }`}>{priority} Priority</span>
                        </div>
                        <div>
                            <span className="mr-4 font-bold ">{customer}</span>
                            <span><FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500" />
                                {createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}