import React from 'react'
import Countdown, { doubleDigit } from 'react-downcount'

export default function Counter() {

    const endDate = new Date('2020-05-01')

    return (
        <Countdown
            className="timer clearfix"
            endDate={endDate}
        >
            {({ days, hrs, mins, secs }) => (

                <ul>
                    <li>
                        <span className="days">{days}</span>
                        <p className="timeRefDays">days</p>
                    </li>
                    <li className="seperator">.</li>
                    <li>
                        <span className="hours">{doubleDigit(hrs)}</span>
                        <p className="timeRefHours">hours</p>
                    </li>
                    <li className="seperator">:</li>
                    <li>
                        <span className="minutes">{doubleDigit(mins)}</span>
                        <p className="timeRefMinutes">minutes</p>
                    </li>
                    <li className="seperator">:</li>
                    <li>
                        <span className="seconds">{doubleDigit(secs)}</span>
                        <p className="timeRefSeconds">seconds</p>
                    </li>
                </ul>
            )}
        </Countdown>
    )
}
