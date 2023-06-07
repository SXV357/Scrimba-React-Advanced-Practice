import React, {Component} from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    decrement = () => {
        this.setState(prevState => {
            return {count: prevState.count - 1}
        })
    }

    render() {
        const ModifiedComponent = this.props.component;
        return (
            <ModifiedComponent current = {this.state.count} increment = {this.increment} decrement = {this.decrement} {...this.props}/>
        )
    }
}

export function withIncrementer(Component){
    return function(props) {
        return <Counter {...props} component = {Component}/>
    }
}
