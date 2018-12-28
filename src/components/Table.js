import React from 'react'
import Table from 'react-bootstrap/lib/Table'

export const CustomTable = (props) => {
    console.log(">>table", props.users)
    return (
        <Table>
            <tbody>
                {props.users.map(user => <tr><td>{user.user}</td><td>{user.email}</td></tr>)}
            </tbody>
        </Table>
    )
}