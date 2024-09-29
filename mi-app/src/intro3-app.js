import { Component } from "react"

class Button extends Component{
    state = {

    }
    
    constructor(props){
        super(props)
        console.log('constructor', props)
    }


    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate', prevProps, prevState)
    }

    componentWillUnmount(){
        console.log('desmontando componente', this.props, this.state)
    }

    render(){
        console.log('ejecutando metodo render button')
        return(
            <button onClick={() => this.setState({prop:1})}>
                Enviar
            </button>
        )
    }
}

class Input extends Component {
    state = {valor: ''}

    handleChange = (value) => {
        this.setState({valor:value})
    }
    render(){
        return(
            <input
                value={this.state.value}
                onChange={e=>this.handleCahnge(e.target.value)}
                />
        )
    }
}

class App extends Component{
    state = {
        valor:3
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <p>Hola mundo</p>
                {this.state.valor === 3
                ? <Button propiedad = 'propx' />
                : null
                }
                <button 
                className={`${this.state.valor}`}
                onClick={()=>this.setState({valor: 2})}>
                    Enviar en app
                </button>
                <p>
                Nombre completo:
                <Input />
                <Input />
                </p>
            </div>
        )
    }
}

export default App