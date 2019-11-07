import React from "react";
import styled from "styled-components";

const Image = styled.section `
    img {
        position: relative;
        float: left;
        height: 100%;
        width: 100%;
        text-align: center;
    }


// `
const ImageCard = (props) => {
    return (
        <Image>
            <img src={props.image} alt={props.image} key={props.id} id={props.id} style={{width: "100%", height: "150px"}}></img>
        </Image>
    )
}

export default ImageCard;