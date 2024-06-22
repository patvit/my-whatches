import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import dayjs from 'dayjs'

function Watch({ watch, onDelete }) {
    const difference = new Date().getTimezoneOffset() / 60 + Number(watch.timeZone);
    const [second, setSecond] = useState(dayjs().format('s'));
    const [minute, setMinute] = useState(dayjs().format('m'));
    const [hour, setHour] = useState(Number(dayjs().format('h')) + difference);

    useEffect(() => {
        const tiktak = setInterval(() => {
            setSecond(dayjs().format('s'));
            setMinute(dayjs().format('m'));
            setHour(Number(dayjs().format('h')) + difference);
        }, 1000)
        return () => clearInterval(tiktak);
    }, [difference]);

    return (
        <div className="watch">
            <h4 className="watch-title">
                {watch.nameWatch} <br/> ({watch.timeZone >= 0 ? 'UTC: +' : 'UTC: -'}{Math.abs(watch.timeZone)}) 
                <span className="watch-close" onClick={() => onDelete(watch.id)}>&#10006;</span>
            </h4>
            <div className="watch-body">
                <div className="watch-center"></div>
                <div className="watch-second" style={{ transform: `rotate(${second * 6}deg)` }}></div>
                <div className="watch-minute" style={{ transform: `rotate(${minute * 6}deg)` }}></div>
                <div className="watch-hour" style={{ transform: `rotate(${hour * 30 + minute / 12 * 6}deg)` }}></div>
            </div>
        </div>
    );
}

Watch.propTypes = {
    watch: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Watch