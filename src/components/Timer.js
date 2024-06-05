import { useEffect, useState } from "react";
import "./Timer.css"

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)

        return () => clearInterval(setInterval)
    }, [])

    return (
        <div className="container">
            <h1>Timer: {seconds} seconds</h1>
        </div>
    );
}

export default Timer;