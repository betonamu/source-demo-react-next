import {useEffect, useState} from "react";
import moment from "moment";


const useCountDown = (countDownTime) => {
    const [time, setTime] = useState({});

    const padStartNumber = (number, field) => {
        if (field === 'days' && !number) {
            return '';
        } else {
            return number.toString().padStart(2, "0");
        }
    }

    useEffect(() => {
        if (!countDownTime) {
            setTime({hours: '00', minutes: '00', seconds: '00'});
            return;
        }
        let deadline = moment(countDownTime);

        let x = setInterval(() => {
            let currentTime = new Date().getTime();
            let eventTime = deadline - currentTime;

            // let hours = padStartNumber(Math.floor((eventTime / (1000 * 60 * 60 * 24)) * 24));
            let days = padStartNumber(Math.floor(eventTime / (1000 * 60 * 60 * 24)), 'days');
            let hours = padStartNumber(Math.floor((eventTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            let minutes = padStartNumber(Math.floor((eventTime % (1000 * 60 * 60)) / (1000 * 60)));
            let seconds = padStartNumber(Math.floor((eventTime % (1000 * 60)) / 1000));

            setTime({days, hours, minutes, seconds});

            if (eventTime < 0) {
                clearInterval(x);
                setTime({days: '', hours: '00', minutes: '00', seconds: '00'});
            }
        }, 1000);

        return () => {
            clearInterval(x);
        }
    }, [countDownTime]);

    return time;
}

export default useCountDown;