import React, { createContext, useState } from 'react'
import CompB from './compB'

export const userContext = createContext()
const CompC = (props) => {
    const [list, setList] = useState([])
    const getData = (data) => {
        setList([...list, data])
    }
    return (
        <div>
            Hello this is table
            <userContext.Provider value={{ getData }}>
                <CompB />
            </userContext.Provider>
            Recieve Data
            <div>
                {list && list.map((item) => {
                    return (
                        <>
                            <tr style={{ textAlign: "center" }}>
                                <td><b>{item.id}</b></td>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                            </tr>
                        </>
                    )
                })
                }
            </div>

        </div>
    )

}

export default CompC