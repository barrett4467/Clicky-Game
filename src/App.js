import React from 'react';
import styled from "styled-components";
import Container from "./components/Container/index"
import ImageCard from "./components/ImageCard/image"
import images from "./images.json"

const Jumbotron = styled.section `
  div.jumbotron {
    height: 585px;
    width: 705px;
    margin: 60px auto;
  }

`

class App extends React.Component {
  randomizeImages = () => {
    const randomImage = images.sort(() => Math.random() - 0.5);
    this.setState({images: randomImage});
  }
  state = {
    images,
    newClick: "0",
    clicked: [],
    wins: 0,
    highScore: 0
  }
  
  clickedImages = [];

  handleClick = (image) => {
    this.clickedImages.push(image.id);
    const newClick = image.id;
    
    console.log(this.state.clicked);
    console.log(this.clickedImages);
    // // console.log(image.id);
    
    // console.log("Clicked from state: ");
    // console.log(this.state.clicked);
    const match = () => {
      //if it matches that means that the image has been guessed already
      this.clickedImages = [];

      //reset wins to 0 & clicked to empty array
      this.setState({
        wins: 0,
        clicked: [15]
      });
      console.log("In Match: " + this.state.clicked);
      console.log("I'm in match");
    }
    const noMatch = () => {
      console.log("No match");
      console.log("Image Id: " + image.id);
      this.setState({
        wins: this.state.wins + 1,
        clicked: this.clickedImages
      });
      console.log("Winner: " + this.state.wins);
    }
    for (let i = 0; i < this.state.clicked.length - 1; i++){
      console.log("Past: " + this.state.clicked[i])
      this.state.clicked[i] === newClick ? match() : noMatch()
    }

    this.setState({clicked: this.clickedImages});

    // this.randomizeImages();
  }

  render(){
    return (
      <Jumbotron>
        <div className="jumbotron">
          <h2>{`Wins: ${this.state.wins}`}</h2>
          <h2>{`High Score: ${this.state.highScore}`}</h2>
          {this.state.images.map(image => (
            <button
              onClick={()=>this.handleClick(image)}
              id={image.id}
              >
              <Container 
                key={image.id}
                >
                  <ImageCard
                  id={image.id}
                  image={image.image}
                  clicked= {this.state.clicked}
                  />
              </Container>
             </button>
          ))
          }
        </div>
      </Jumbotron>
    );
  }

}
  



export default App;
