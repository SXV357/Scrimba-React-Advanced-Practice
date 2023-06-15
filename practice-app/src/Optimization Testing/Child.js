import React, {memo} from 'react'
import GrandChild from './GrandChild'

// export default memo(function Child() {
//     console.log("Child component was rendered")
//   return (
//     <div>
//         <GrandChild />
//         <GrandChild />
//     </div>
//   )
// });

// class component version
export default class Child extends React.PureComponent{
  render(){
    console.log("Child component was rendered");
    return (
      <div>
          <GrandChild />
          <GrandChild />
      </div>
    )
  }
}
