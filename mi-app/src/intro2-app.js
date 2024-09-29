import Button from "./Button"

const App = () => {

    const arr = [
        'ia',
        'ea',
        'oa',
    ]

    const miVariable = false
    // const miVariable = true

    if (miVariable){
        return <p>Mi variable es true</p>
    }

    return (
        <div>
            <h1 onClick={(e)=> console.log('click',e)}>Hola Mundo</h1>
            {arr.map(el => <p key={el}>{el}</p>)}
            <Button onClick={()=> console.log('Click')}>
                Enviar
            </Button>
        </div>
    )
}

export default App