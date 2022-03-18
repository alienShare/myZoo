import React from "react";

const component=(props)=> {
return (
<h1
className='border border-dark p-2 m-2 bg-primary rounded text-center text-white'>
    {props.children}
</h1>

)
}
export default component