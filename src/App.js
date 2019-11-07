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
    clicked: [],
    wins: 0,
    highScore: 0
  }
  
  clickedImages = [];
  newState = {...this.state};
  
  handleClick = (image) => {
    const newClick = image.id;
    
    this.clickedImages.push(newClick);
    console.log("New Click: " + newClick);
    const match = () => {
      //if it matches that means that the image has been guessed already
      this.newState.clicked = [];
      console.log(this.newState.clicked);

      //reset wins to 0 & clicked to empty array
      this.setState(this.newState);
      console.log("In Match: ");
      console.log(this.state);
      console.log("I'm in match");
    };
    const noMatch = () => {
      console.log("I'm in noMatch");
      console.log(this.newState.clicked);
      this.newState.wins++;
      console.log(this.newState.wins);
      // this.setState({
      //   wins: this.state.wins + 1,
      //   clicked: this.clickedImages
      // });
      // console.log("Winner: " + this.state.wins);
    }
    // for (let i = 0; i < this.state.clicked.length - 1; i++){
    //   this.state.clicked[i] === newClick ? this.setState({clicked: []}) : noMatch();
    // }
        
    for (let i = 0; i < this.newState.clicked.length - 1; i++){
      // console.log(this.newState.clicked[i]);
      newClick === this.newState.clicked[i] ? match() : noMatch();
      // this.state.clicked[i] === newClick ? this.setState({clicked: []}) : noMatch();
    }

    this.newState.clicked = this.clickedImages;
    // console.log("new state:");
    // console.log(this.newState.clicked);
    
    // console.log(this.state.clicked);
    // console.log(this.clickedImages);
    // console.log(this.state.wins)
    // // console.log(image.id);
    
    // console.log("Clicked from state: ");
    // console.log(this.state.clicked);
    // const match = () => {
      //if it matches that means that the image has been guessed already
      // this.clickedImages = [];

      //reset wins to 0 & clicked to empty array
      // this.setState({
      //   wins: 0,
      //   clicked: []
      // });
      // console.log("In Match: " + this.state.clicked);
      // console.log("I'm in match");
    // }
    // const noMatch = () => {
    //   // console.log("No match");
    //   // console.log("Image Id: " + image.id);
    //   this.setState({
    //     wins: this.state.wins + 1,
    //     clicked: this.clickedImages
    //   });
    //   // console.log("Winner: " + this.state.wins);
    // }
    // // for (let i = 0; i < this.state.clicked.length - 1; i++){
    // //   this.state.clicked[i] === newClick ? this.setState({clicked: []}) : noMatch();
    // // }
    
    // this.setState({clicked: []})

    //   for (let i = 0; i < this.state.clicked.length - 1; i++){
    //     this.state.clicked[i] === newClick ?  match(): noMatch();
    //   }


    // this.setState({clicked: this.clickedImages});

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
