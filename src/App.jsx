import './App.css'
import { useState } from 'react';
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ticketsData from "./data/tickets.json";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [progress, setProgress] = useState([]);
  const [resolved, setResolved] = useState([]);




const handleProgress = (ticket) => {
  // Update ticket status in tickets list
  const updatedTickets = tickets.map(t =>
    t.id === ticket.id ? { ...t, status: "In Progress" } : t
  );
  setTickets(updatedTickets);

  // Add to progress if not already there
  if (!progress.find(t => t.id === ticket.id)) {
    setProgress([...progress, { ...ticket, status: "In Progress" }]);
    toast.info(`"${ticket.title}" added to In Progress`);
  } else {
    
    toast.warning(`"${ticket.title}" is already in progress`);
  }
};

// const handleProgress = (ticket) => {
//   // Check if already in progress
//   const alreadyInProgress = progress.some(t => t.id === ticket.id);
//   if (alreadyInProgress) {
//     toast.warning(`"${ticket.title}" is already in progress`);
//     return;
//   }

//   // Update ticket status in tickets list
//   const updatedTickets = tickets.map(t =>
//     t.id === ticket.id ? { ...t, status: "In Progress" } : t
//   );
//   setTickets(updatedTickets);

//   // Add to progress
//   setProgress(prev => [...prev, { ...ticket, status: "In Progress" }]);
//   toast.info(`"${ticket.title}" added to In Progress`);
// };


//  resolved tickets 
const handleComplete = (ticketId) => {
  const completedTicket = progress.find(t => t.id === ticketId);
  if (!completedTicket) return;

  // Update ticket status
  const updatedTicket = { ...completedTicket, status: "Resolved" };

  // 1 & 2: Add to Resolved and remove from Progress
  setResolved(prev => [...prev, updatedTicket]);
  setProgress(prev => prev.filter(t => t.id !== ticketId));

  // 3: Remove from Customer Tickets (if still in tickets list)
  setTickets(prev => prev.filter(t => t.id !== ticketId));

  // 4: Toast success
  toast.success(`"${completedTicket.title}" marked as Resolved`);
};
    // const handleComplete = (ticketId) => {
    // const completedTicket = progress.find(t => t.id === ticketId);
    // if (!completedTicket) return;

  //   const updatedTicket = { ...completedTicket, status: "Resolved" };
  //   setResolved([...resolved, updatedTicket]);
  //   setProgress(progress.filter(t => t.id !== ticketId));

  //   toast.success(`"${completedTicket.title}" marked as Resolved`);
  // };
   // Complete ticket
  // const handleComplete = (ticketId) => {
  //   const completedTicket = progress.find(t => t.id === ticketId);
  //   if (!completedTicket) return;

  //   const updatedTicket = { ...completedTicket, status: "Resolved" };
  //   setResolved([...resolved, updatedTicket]);
  //   setProgress(progress.filter(t => t.id !== ticketId));
  //   toast.success(`"${completedTicket.title}" marked as Resolved`);
  // };
  //   const handleComplete = (ticketId) => {
  //   const completedTicket = progress.find(t => t.id === ticketId);
  //   if (!completedTicket) return;

  //   const updatedTicket = { ...completedTicket, status: "Resolved" };

  //   // Add to Resolved section
  //   setResolved([...resolved, updatedTicket]);

  //   // Remove from Task Status
  //   setProgress(progress.filter(t => t.id !== ticketId));

  //   toast.success(`"${completedTicket.title}" marked as Resolved`);
  // };

  
  return (
    <>

      <Navbar />
      <Banner progressCount={progress.length}
        resolvedCount={resolved.length} />
      <Main 
        handleProgress={handleProgress}
        progress={progress}
        resolved={resolved}
        handleComplete={handleComplete}
        tickets={tickets}
        />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

    </>
  );
}

export default App;
