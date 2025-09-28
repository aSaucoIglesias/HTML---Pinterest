import React, { useState } from 'react'

const ObjectState = () => {

    const [avanger, setAvanger] = useState({
        name: "Tony Stark",
        superHeroName: "Ironman",
        age: 45
    })

    return (
        <div>
            <h4>{ avanger.name} || { avanger.superHeroName } || { avanger.age } años</h4>
            <input
                type="text"
                value={ avanger.name }
                onChange={(e) => setAvanger({ ...avanger, name: e.target.value})}
            />
            <input
                type="text"
                value={ avanger.superHeroName }
                onChange={(e) => setAvanger({ ...avanger, superHeroName: e.target.value})}

            />
            <input
                type="number"
                value={ avanger.age }
                onChange={(e) => setAvanger({ ...avanger, age: e.target.value})}
            />
        </div>
    )
}

export default ObjectState