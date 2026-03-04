import './App.css'
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [progress, setProgress] = useState([]);
  const [resolved, setResolved] = useState([]);


  // Add ticket to In Progress
  const handleProgress = (ticket) => {
    if (!progress.find(t => t.id === ticket.id)) {
      setProgress([...progress, ticket]);
      toast.info(`"${ticket.title}" added to In Progress`);
    }
    else {
      toast.warning(`"${ticket.title}" is already in progress`);
    }
  };

  // Complete ticket → move to Resolved
  const handleComplete = (ticketId) => {
    const completedTicket = progress.find(t => t.id === ticketId);
    if (!completedTicket) return;

    setResolved([...resolved, completedTicket]);
    setProgress(progress.filter(t => t.id !== ticketId));
    toast.success(`"${completedTicket.title}" marked as Resolved`);
  };
  return (
    <>

      <Navbar />
      <Banner progressCount={progress.length}
        resolvedCount={resolved.length} />
      <Main handleProgress={handleProgress}
        progress={progress}
        resolved={resolved}
        handleComplete={handleComplete} />
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
