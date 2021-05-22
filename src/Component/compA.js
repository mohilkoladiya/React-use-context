import React, { useContext, } from 'react'
import { userContext } from './compC';


const CompA = (props) => {
    const { data1 } = props;
    const value = useContext(userContext)
    
    const sendHandler = (e, data) => {
        value.getData(data)
    }
    return (
        <div>
            <table style={{ border: "1px solid black" }}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>


                {data1 && data1.map((item) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>
                                <button onClick={(e) => { sendHandler(e, item) }}>Send Data</button>
                            </td>
                        </tr>
                    )
                })
                }

            </table>
        </div>
    )

}

export default CompA