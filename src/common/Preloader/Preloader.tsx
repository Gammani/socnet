import React from "react";
import preloader from "../../assets/images/Spinner-1s-200px.svg";

type PropsType = {

}


const Preloader = (props: PropsType) => {
    return (
        <img src={preloader} alt={"loader"}/>
    )
}

export default Preloader;