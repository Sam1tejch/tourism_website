import React, { useState } from 'react'

export default function Cal() {
    const [ans, ansval] = useState('0');

    return (
        <>
            <div id="disp">{ans}</div>
            <div id="numbers">
                <button id="0">0</button>
                <button id="1">1</button>
                <button id="2">2</button>
                <button id="3">3</button>
                <button id="4">4</button>
                <button id="5">5</button>
                <button id="6">6</button>
                <button id="7">7</button>
                <button id="8">8</button>
                <button id="9">9</button>
            </div>
        </>
    )
}
