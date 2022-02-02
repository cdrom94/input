import { useState, useEffect } from "react";

const Clock = () => {
  let [clock, setClock] = useState(new Date())
  let updateClock = () => setClock(new Date())

  useEffect(() => {
    const id = setInterval(updateClock, 1000);
    return () => clearInterval(id)
  }, [clock])

  let date = clock.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  let time = clock.toLocaleTimeString('en-US', { hour12: false });

  return (
    <div className="clock" aria-label="clock">
      {`${date} ${time}`}
    </div>
  );
}

export default Clock;
