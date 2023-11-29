import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['Rodrigo','Schemes','Bitencourt'])

    const [users, setUsers] = useState([
        { id: 1, name: 'Usuario A'},
        { id: 2, name: 'Usuario B'},
        { id: 3, name: 'Usuario C'},
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4)
        
        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender