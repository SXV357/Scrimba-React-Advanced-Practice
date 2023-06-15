import React, {memo} from 'react'
import Parent from './Parent'

function GrandParent() {
    console.log("GrandParent component was rendered")
  return (
    <div>
        <Parent />
        <Parent />
    </div>
  )
};

/**@param prevProps memoized prop version that is checked with incoming value of props upon change*/
/**@returns whether or not this component should update(custom check) */

function areEqual(prevProps, nextProps){
  // second argument passed to memo and is a custom comparison function
  // that only checks the currentProps and the incoming props

  // Main different: we return false in shouldComponentUpdate if both prop values are equal
    // but in areEqual we return true and vice-versa if not
}

export default memo(GrandParent);

// class component version
// export default class GrandParent extends React.PureComponent {
//   // pure component is the class-component based version of memo(only meant for functional components)
//   // purecomponent implements shouldComponentUpdate() under the hood
//   // if the user tries implementing shouldComponentUpdate() manually, a warning will be raised
//   render() {
//     console.log("GrandParent component was rendered");
//     return (
//       <div>
//         <Parent />
//         <Parent />
//       </div>
//     )
//   }
// }
