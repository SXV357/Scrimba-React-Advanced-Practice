import React, {Component} from 'react'
// import {NewContext} from './Context';
import PropTypes from 'prop-types';

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

    // componentDidUpdate(){
    //     console.log("Counter component just updated");
    // }

    // state that we want to access the context we created in this class component
    // static contextType = NewContext;
    static defaultProps = {startingValue: 0}
    static propTypes = {startingValue: PropTypes.number.isRequired}

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

    reset = () => {this.setState(() => ({count: 0}))}

    // Non-HOC implementation(using render props)
    render(){
        // this.context is used to access the value provided via Provider to context through a class component
        // console.log(this.context);
        return (
            <>
                {/* {this.context ? this.props.children(this.state.count, this.increment, this.decrement, this.powerUp, this.context, this.reset) : <div>{"Not able to render children. Please modify the context value and try again."}</div>} */}
{                this.props.children(this.state.count, this.increment, this.decrement, this.powerUp, this.reset)
}            </>
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
