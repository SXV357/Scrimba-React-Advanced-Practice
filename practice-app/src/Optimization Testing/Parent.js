import React, {memo} from 'react'
import Child from './Child'

export default memo(function Parent() {
    console.log("Parent component was rendered")
  return (
    <div>
        <Child />
        <Child />
    </div>
  )
});
