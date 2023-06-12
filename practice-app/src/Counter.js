import React, {Component} from 'react'

export default class Counter extends Component {
    state = {
        count: this.props.startingValue
    }

    static defaultProps = {
        startingValue: 0
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

    // Non-HOC implementation(using render props)
    render(){
        return (
            <>
                {this.props.children(this.state.count, this.increment, this.decrement)}
            </>
        )
    }

    // // HOC implementation
    // render() {
    //     const ModifiedComponent = this.props.component;
    //     return (
    //         <ModifiedComponent current = {this.state.count} increment = {this.increment} decrement = {this.decrement} {...this.props}/>
    //     )
    // }
}

// export function withIncrementer(Component){
//     return function(props) {
//         return <Counter {...props} component = {Component}/>
//     }
// }
