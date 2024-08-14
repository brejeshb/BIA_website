import React, { useState, useEffect } from "react";
import "./Countdown.css";
import { next_bia_event } from "../Events/bia_events";

const targetDate = next_bia_event ? next_bia_event.date : new Date("2024-08-06T23:59:59");

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const currentDate = new Date();
        const timeDifference = targetDate.getTime() - currentDate.getTime();

        if (timeDifference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const totalSeconds = Math.floor(timeDifference / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        return { days, hours, minutes, seconds };
    }

    return (
        <div className="countdown-container">
            < br/>
            <h3>Sign ups close in</h3>
            < br/>
            <div className="countdown">
                <CountdownItem value={timeLeft.days} label="days" />
                <CountdownItem value={timeLeft.hours} label="hours" />
                <CountdownItem value={timeLeft.minutes} label="minutes" />
                <CountdownItem value={timeLeft.seconds} label="seconds" />
            </div>
            {next_bia_event && (
                <div className="next-event">
                    <br />
                    <h3>Next Event: {next_bia_event.name}</h3>
                    <p>{next_bia_event.description}</p>
                    <a href={next_bia_event.url} className="button">Sign Up</a>
                </div>
            )}
        </div>
    );
}

function CountdownItem({ value, label }) {
    const [prevValue, setPrevValue] = useState(value);

    useEffect(() => {
        if (value !== prevValue) {
            setPrevValue(value);
        }
    }, [value, prevValue]);

    return (
        <div className="countdown-card">
            <div className={`countdown-card-bg ${prevValue !== value ? "rotate" : ""}`}>
                <div className="countdown-card-number">{value}</div>
            </div>
            <div className="countdown-card-label">{label}</div>
        </div>
    );
}

export default Countdown;
