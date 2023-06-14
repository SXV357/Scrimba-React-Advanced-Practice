import React, {memo} from 'react'

export default memo(function GrandChild() {
    console.log("GrandChild component was rendered")
  return (
    <div></div>
  )
});
