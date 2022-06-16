import React, { useState, useEffect } from 'react';

export function Hooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

//    // Similar to componentDidMount and componentDidUpdate:
//    useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });


useTitle(count); 
const width =useWindowWidth();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h4>Inner Width: {width}</h4>
    </div>
  );
}

function useTitle(count){
    // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
}
function useWindowWidth(){
    const [width, setWidth]=useState(window.innerWidth);
    useEffect(()=>{
      const handleWidth=()=>setWidth(window.innerWidth);
          window.addEventListener('resize',handleWidth);
          return()=>{
              window.removeEventListener('resize',handleWidth);
          }
    })

    return width;
}