import React, {Component} from 'react'

export default class Counter extends Component {
    state = {
        count: this.props.startingValue
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextState.count === this.state.count){
            return false;
        }
        return true;
    }

    componentDidUpdate(){
        console.log("Counter component just updated");
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

    powerUp = () => {
        this.setState(prevState => {
            return {count: prevState.count * 2}
        })
    }

    // Non-HOC implementation(using render props)
    render(){
        return (
            <>
                {this.props.children(this.state.count, this.increment, this.decrement, this.powerUp)}
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
