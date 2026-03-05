import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


export default function Ticket({ ticket, handleProgress }) {
  const { title, description, customer, priority, status, createdAt, code } = ticket;

  const isClickable = status === "Open" || status === "In Progress"; 

  return (
    <div
      onClick={() => {
        if (isClickable) handleProgress(ticket); 
      }}
      className={`card w-96 bg-base-100 card-xs shadow-sm hover:shadow-lg 
        ${isClickable ? "cursor-pointer" : "cursor-default"}
        ${status === "In Progress" ? "opacity-70" : ""}
      `}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>

          <span
            className={`badge badge-outline flex items-center gap-2
              ${status === "Open"
                  ? "badge-warning"
                  : status === "In Progress"
                  ? "badge-info"
                  : "badge-success"
                }`}
          >
            <span
              className={`w-2 h-2 rounded-full
                ${status === "Open"
                    ? "bg-yellow-500"
                    : status === "In Progress"
                    ? "bg-blue-500"
                    : "bg-green-500"
                  }`}
            ></span>
            {status}
          </span>
        </div>

        <p>{description}</p>

        <div className="card-actions flex justify-between">
          <div>
            <span className="py-2 mr-4 text-[10px] font-bold">{code}</span>

            <span
              className={`font-bold
                ${priority === "High"
                    ? "text-red-500"
                    : priority === "Medium"
                    ? "text-green-500"
                    : "text-blue-500"
                  }`}
            >
              {priority} Priority
            </span>
          </div>

          <div>
            <span className="mr-4 font-bold">{customer}</span>

            <span>
              <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500" />{" "}
              {createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}