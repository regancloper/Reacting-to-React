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
            text: "Hello Regan Loper!",
            placeholder: "Enter text here",
        }
    }

    handleInputChange = (value) => {
        this.setState({ inputVal: value });
    }

    handleButtonClick = () => {
        this.setState({ hasLoaded: !(this.state.hasLoaded) });
    }

    componentDidMount() {
        this.setState({ hasLoaded: true });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <h1>{this.state.text} {this.props.text}</h1>
                    <input
                        placeholder={this.state.placeholder}
                        onChange={(event) => this.handleInputChange(event.target.value)}
                    />
                    <div>
                        <button onClick={(() => this.handleButtonClick())}>Submit!</button>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <div>
                        <button onClick={(() => this.handleButtonClick())}>Submit!</button>
                    </div>
                </React.Fragment>
            );

        }

    }
}

export default App;