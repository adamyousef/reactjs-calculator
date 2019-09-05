import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            result: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (button) => {
        if (button === "=") {
            this.retrunResult();
        } else if (button === "C") {
            this.reset();
        } else if (button === "CE") {
            var val = this.state.result;
            val = val.slice(0, -1);
            this.setState({ result: val });
        } else {
            var val = this.state.result + button;
            this.setState({ result: val });
        }
    }
    retrunResult() {
        try {
            var val = eval(this.state.result);
            this.setState({ result: val });
        } catch (err) {
            var val = "NaN";
            this.setState({ result: val });
        }
    }
    reset() {
        var val = "";
        this.setState({ result: val });
    }


    render() {
        return ( <div className = "App" >
            <h1> My React Calculator </h1>   <
            Calculator result = { this.state.result }
            onClick = { this.handleChange }
            />   
            </div >
        );
    }



}

export default App;