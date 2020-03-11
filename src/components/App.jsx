import React, { Component } from 'react';

// const App = (props) => {
//     return (
//         <h1>{ props.text }</h1>
//     );
// }

class App extends Component {
    constructor() {
        super();

        this.state = {
            inputVal: '',
            text: "Hello Regan Loper!"
        }
    }

    handleInputChange = e => this.setState({ inputVal: e.target.value });
    handleButtonClick = () => this.setState({ hasLoaded: !(this.state.hasLoaded) });


    componentDidMount() {
        this.setState({ hasLoaded: true });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <>
                    <h1>{this.state.text} {this.props.text}</h1>
                    <input
                        value={this.state.inputVal}
                        onChange={this.handleInputChange}
                    />
                    <div>
                        <button onClick={this.handleButtonClick}>Submit!</button>
                    </div>
                    <h1>{this.state.inputVal}</h1>
                </>
            );
        } else {
            return (
                <>
                    <h1>Loading...</h1>
                    <div>
                        <button onClick={this.handleButtonClick}>Submit!</button>
                    </div>
                </>
            );

        }

    }
}

export default App;