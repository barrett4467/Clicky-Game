import React from "react";
import styled from "styled-components";

const Image = styled.section `
    img {
        position: relative;
        max-height: 100%;
        max-width: 100%;
        text-align: center;
    }


// `
const ImageCard = (props) => {
    return (
        <Image>
            <img src={props.image} alt={props.id} key={props.id}></img>
        </Image>
    )
}

export default ImageCard;