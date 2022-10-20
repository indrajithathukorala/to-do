import React from 'react';
import NoResult from './noresults';

const School = ({allname, ado}) => {
  return <>
   {allname.length > 0 ? allname.map( (name)=> (
       <h1>{name}</h1>
   ))
   :
  <NoResult ado={ado}/>
}
  </>
}

export default School;
