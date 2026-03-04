export default function Resolved({ tickets }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Resolved ({tickets.length})</h2>
      {tickets.length === 0 && <p>No resolved tasks yet.</p>}

      <div className="flex flex-col gap-4 mt-4">
        {tickets.map(ticket => (
          <div
            key={ticket.id}
            className="card bg-base-100 shadow-md p-4 flex justify-between items-center"
          >
            <span>{ticket.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}