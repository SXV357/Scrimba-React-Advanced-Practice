import React, {memo} from 'react'

// export default memo(function GrandChild() {
//     console.log("GrandChild component was rendered")
//   return (
//     <div></div>
//   )
// });

// class component version
export default class GrandChild extends React.PureComponent{
  render(){
    console.log("GrandChild component was rendered");
    return (
      <div></div>
    )
  }
}
