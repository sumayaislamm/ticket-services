export default function Progress({ tickets, handleComplete }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Task Status ({tickets.length})</h2>
      {tickets.length === 0 && <p>Select a ticket to add to Task Status</p>}

      <div className="flex flex-col gap-4 mt-4">
        {tickets.map(ticket => (
          <div
            key={ticket.id}
            className="card bg-base-100 shadow-md p-4 flex justify-between items-center"
          >
            <span>{ticket.title}</span>
            {handleComplete && (
              <button
                onClick={() => handleComplete(ticket.id)}
                className="btn btn-sm btn-success"
              >
                Complete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}