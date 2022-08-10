import React from 'react'
import Dots from './Dots'
type Props = {}

const Circle = (props: Props) => {

    const dots = []
    // for(let i = 0; i < 8; i++){
    //     dots.push(<Dots/>)
    // }
    
  return (
    <div
    style={{
        position: "absolute",
        left: "25%",
        top: "40%",
        transform: "translate(-50%, -50%)"
    }}>
        <div style={{
            position: "absolute",
            width: "552px",
            height: "50px",
            // left: "188px",
            // top: "107px",
            backgroundColor : "rgba(132,164,251,1)"
            }}>
        {/* <div className="card-body"> */}
            {/* {dots} */}
        {/* </div> */}
        </div>
    </div>

  )
}

export default Circle