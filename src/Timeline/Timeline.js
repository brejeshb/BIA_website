import React, { useEffect, useRef } from "react";
import "./Timeline.css";
import { bia_events } from "../Events/bia_events";

function Timeline() {
    const checkpointsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            checkpointsRef.current.forEach((bia_event) => {
                if (isInView(bia_event)) {
                    bia_event.classList.add("checkpoint--visible");
                } else {
                    bia_event.classList.remove("checkpoint--visible");
                }
            });
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isInView = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.bottom > 0 &&
            rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
        );
    };

    const renderEventsForMonth = (month, events) => (
        <div className="checkpoint" ref={el => checkpointsRef.current.push(el)} key={month}>
            <div>
                {/* className="glow" */}
                <h2>{month}</h2>
                {events.map((event, index) => (
                    <div key={index} className="event-item">
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <button
                            className="button"
                            onClick={() => window.open(event.url, '_blank')}
                        >
                            Sign Up
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="timeline-container">
            <div className="title">
                <h1>BIA TIMELINE</h1>
                <p>This is the BIA timeline</p>
                <div className="timeline">
                    {/* <div className="borderless">                     */}
                        {Object.keys(bia_events).map(month => renderEventsForMonth(month, bia_events[month]))}
                        {/* </div> */}

                </div>
            </div>
        </div>
    );
}

export default Timeline;
