import React from "react";
import styled from "styled-components";

const Card = styled.div `
  div {
    float: left;
    height: 150px;
    width: 155px;
    margin: 2px;
  }

`

function Container(props) {
  // console.log(props.children.props);
  return (
    <Card>
      <div className="card" id={props.children.props.id}>
        {props.children}
      </div>
    </Card>
  )
  
}

export default Container;