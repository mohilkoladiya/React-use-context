import React from 'react'
import CompA from './compA'


const CompB = (props) => {
    const data = [
        { id: "1", name: "Mohil", gender: "male" },
        { id: "2", name: "Karina", gender: "female" },
        { id: "3", name: "Yash", gender: "male" }
    ]
    return (
        <div>
            <CompA data1={data}/>
        </div>
    )

}

export default CompB