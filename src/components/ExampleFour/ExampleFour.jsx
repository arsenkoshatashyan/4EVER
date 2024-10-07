import React, { useEffect, useState } from 'react'
import "./ExampleFour.scss"

export default function ExampleFour() {
    const targetDate = new Date("2025-01-09T11:00:00").getTime();
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      let timeLeft = {};
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, [targetDate]);
  return (
    <div className='ExampleFour'>
        <div className="ExampleFour__content">
        <div className="ExampleFour__content-title">
            <h1>Կարեն & Սոնա</h1>
            <h2>Հարսանեկան հրավիրատոմս</h2>
            </div>
        </div>
        <div className="ExampleFour__content-clock">
          <h3>Մնաց</h3>
          {timeLeft.days !== undefined ? (
            <div>
              <p>
                {timeLeft.days} <br /> Օր
              </p>
              <p>
                {timeLeft.hours} <br /> Ժամ
              </p>
              <p>
                {timeLeft.minutes} <br />
                Րոպե
              </p>
              <p>
                {timeLeft.seconds} <br /> Վայրկյան
              </p>
            </div>
          ) : (
            <div>
              <p>O</p>
              <p>O</p>
              <p>O</p>
              <p>O</p>
            </div>
          )}
        </div>

    </div>
  )
}
