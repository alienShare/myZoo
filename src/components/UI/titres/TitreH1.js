import React from "react";

const TitreH1 = (props) => {

    let backgroundColor= props.bgColor ? props.bgColor : "bg-primary";
    let monCss = `border border-dark p-2 text-center text-white ${backgroundColor}`;

    return (   <h1
        className={monCss}>
        {props.children}
    </h1>

    )
}
export default TitreH1;

