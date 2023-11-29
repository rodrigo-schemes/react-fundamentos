import { useState } from "react"

const ConditionalRender = () => {

    const [x, setX] = useState(true)

    const [name] = useState('Rodrigo')

    return (
        <div>
            <h2>Isso será exibido?</h2>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            <button onClick={() => setX(!x)}>Alterar estado</button>
            <h2>If ternário</h2>
            {name === 'Rodrigo' ? (
                <div>
                    <p>O nome é Rodrigo</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender