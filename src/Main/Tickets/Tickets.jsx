import ticketsData from "../../data/tickets.json";
import Ticket from "./Ticket/Ticket";

export default function Tickets({ handleProgress }) {

   return (
      <>
         <h1 className="text-2xl font-bold text-center">Customer Tickets</h1>
         <p className="p-4 text-center">Total: {ticketsData.length}</p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ticketsData.map((ticket) => (
               <Ticket
                  key={ticket.id}
                  ticket={ticket}
                  handleProgress={handleProgress}
               />
            ))}
         </div>

         
      </>
   )
} 