import React, { useState, useMemo } from 'react'

const numbersList = [1, 2, 1, 4, 0, 6];

const mapScores = (scores, caller) => {
    console.log("Llamamos a esta función", caller)

    return scores.map((number, index) => {
        const calc = (number * 3)/ 2;
        const color = calc < 3 ? "🔴" : "🟢";

        return(
            <p key={index}>
                {calc} {color}
            </p>
        )
    })
}

function BasicUseMemo() {

    const [rerender, setRerender] = useState(false);
    const marksContent = mapScores(numbersList, 'no-useMemo')
    const marksContentMemo = useMemo(()=> {
        return mapScores(numbersList, "useMemo")
    },[])
    return (
        <>
            <div>
                <h3>No use memo</h3>
                {marksContent}
            </div>
            <div>
                <h3>Use memo</h3>
                {marksContentMemo}
            </div>
            <button onClick={()=> setRerender(!rerender)}>Reredender</button>
        </>
    )
}

export default BasicUseMemo