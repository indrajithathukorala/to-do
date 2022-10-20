import { useState } from "react";
import NoResult from "./noresults";

const Moratuwa = ({ischelded, data ,ado, adomk, onchildClick }) => {

    const [statestart, setState] = useState(ischelded);

    function clickf() {
        setState(
            !statestart
        )
        console.log(statestart);
    }

    return(
       <>
       { statestart ? data.map((da)=>(<h1 key={da}>{da}</h1>)): (<NoResult ado={ado} adomk={adomk}/>)}
       <button onClick={clickf} >Click</button>
       <button onClick={onchildClick} >onclick</button>

       </>
    )
}

Moratuwa.defaultProps = {
   data : []
  }

export default Moratuwa;