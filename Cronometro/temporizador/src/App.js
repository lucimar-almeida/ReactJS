import React, { Component } from 'react'
import './estilo.css'


class App extends Component{

    constructor(props){
        super(props)
        this.state={
            numero: 0,
            botao: 'Start'

        }
        this.time= null
        this.start = this.start.bind(this)
        this.clear = this.claer.bind(this)    
        
    }

    start(){
        let state = this.state
        if(this.time !== null){
            clearInterval(this.time) 
            this.time = null
            this.setState()
            state.botao = 'Start'
        }else{
            this.time = setInterval(() => {
                let state = this.state
                state.numero += 0.1
                this.setState(state)
            },100)
            state.botao = 'Pausar'
        }
        this.setState(state)
    }

    claer(){
        if(this.time !== null){
            clearInterval(this.time)
            this.time = null
        }
            let state = this.state
            state.numero = 0
            state.botao = 'Start'
            this.setState(state)

    }

    render(){
        return(
            <div className='container'>
                <img className='img' src={require('./assets/icon.png')}/>
                <a className='crono'>{this.state.numero.toFixed(1)}</a>
                <div className='botoes'>
                    <a className='botao' onClick={this.start}>{this.state.botao}</a>
                    <a className='botao' onClick={this.clear}>Clear</a>
                </div>
            </div>
        )
    }
}

export default App