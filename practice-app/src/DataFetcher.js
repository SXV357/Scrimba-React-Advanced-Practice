import React, {useState, useEffect} from "react"

// functional component version
export default function DataFetcher({url, children}){
    const [load, setLoad] = useState({loading: false, data: null, errorMessage: null})

    useEffect(() => {
        setLoad({...load, loading: true})
        try {
            fetch(url)
            .then(res => res.json())
            .then(data => setLoad({loading: false, data: data}))
        }
        catch {
            setLoad({...load, loading: false, errorMessage: "There was an error when fetching the data."})
        }  
    }, [])

    return (
        <> 
            {children({meta: load.data, isLoading: load.loading, err: load.errorMessage})}
        </>
    )
}

// class component version
// export default class DataFetcher extends React.Component {
//     state = {
//         loading: false,
//         data: null
//     }
    
//     componentDidMount() {
//         this.setState({loading: true})
//         fetch(this.props.url)
//             .then(res => res.json())
//             .then(data => this.setState({data: data, loading: false}))
//     }
    
//     render() {
//         return (
//             <>
//                 {this.props.children(this.state.data, this.state.loading)}
//             </>
//         )
//     }
// }