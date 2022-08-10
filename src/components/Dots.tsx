import React, {useState} from 'react'
import { convertCompilerOptionsFromJson } from 'typescript'
import p1 from './p1.svg'
import p2 from './p2.svg'
import whiteCircle from './whiteCircle.svg'
type Props = {
  id : string
  fun : Function
  player : number
  img : string
}

const Dots = (props: Props) => {

  const [bg, setbg] = useState<string>()

  return (
    <span
    id={props.id}
    style={{
        height: "50px",
        width: "50px",
        backgroundImage : props.img ? `url(${props.img})` : `url(${whiteCircle})`,
        backgroundSize : "cover",
        borderRadius: "50%",
        display: "inline-block",
        margin : "7px 7px 0"
    }} onClick={(e) => {
      props.fun(e)
      // setbg(props.player === 1 ? p1 : p2)
    }
    }></span>   
  )
}

export default Dots