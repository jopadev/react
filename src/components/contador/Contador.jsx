import React from  'react'  
import './Contador.css'
import Display from './Display'
import Step from './Step'
import Botoes from './Botoes'

export default class Contador extends React.Component{

    constructor(props)
    {
	  super(props)
	  
	  this.state = {
        step: props.step || 1,
        value:0
      }
    }	
    
    inc = () => {
        this.setState({
            value : this.state.value + this.state.step
        })
        
    }


    dec = () => {
        this.setState({
            value : this.state.value - this.state.step
        })
    }

    changeStep = (newStep) => {
         this.setState ({
             step : newStep
         })
    }

    render()
    {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Step step={this.state.step} onStepChange={this.changeStep}></Step>
                <Display value={this.state.value}></Display>
                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
            </div>
        )
    }
}