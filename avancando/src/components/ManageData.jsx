import { useState } from "react"

const ManageData = () => {
  
    const [number, setNumber] = useState(0)
    console.log(number)

    return (
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(number + 1)}>Mudar o State</button>
        </div>
    )
}

export default ManageData