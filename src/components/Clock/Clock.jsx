import { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const destination = new Date(new Date().getFullYear() + 1, 0).getTime();

  const updateCountDown = () => {
    const now = new Date().getTime();
    const gap = destination - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    setDays(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);

    setTimeout(updateCountDown, second);
    //console.log("update countdown");
  };

  useEffect(() => {
    //console.log("use effect");
    updateCountDown();
  }, []);

  return (
    <div className="flex items-center text-white space-x-1.5 md:space-x-4">
      <div className="clock__data">
        <span className="clock__data-num">{days}</span>
        <span className="clock__data-text">Days</span>
      </div>
      <span className="clock__data-divide">:</span>
      <div className="clock__data">
        <span className="clock__data-num">{hours}</span>
        <span className="clock__data-text">Hours</span>
      </div>
      <span className="clock__data-divide">:</span>
      <div className="clock__data">
        <span className="clock__data-num">{minutes}</span>
        <span className="clock__data-text">Minutes</span>
      </div>
      <span className="clock__data-divide">:</span>
      <div className="clock__data">
        <span className="clock__data-num">{seconds}</span>
        <span className="clock__data-text">Seconds</span>
      </div>
    </div>
  );
};

export default Clock;
