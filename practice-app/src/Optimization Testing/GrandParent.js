import React, {memo} from 'react'
import Parent from './Parent'

export default memo(function GrandParent() {
    console.log("GrandParent component was rendered")
  return (
    <div>
        <Parent />
        <Parent />
    </div>
  )
});
