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
    clicked: [0],
    wins: 0,
    highScore: 0,
    message: "Click on the Images to begin! But be sure not to click the same image twice"
  }

  newState = {...this.state};

  handleClick = (event) => {
    const id = event.target.id;

    const lose = () => {
      this.newState.wins > this.newState.highScore ? this.newState.highScore = this.newState.wins : console.log("No score change");
      this.newState.message = "You've Already Guessed that!! Game Over! Click to play again"
      this.newState.clicked = [];
      this.newState.wins = 0;
      console.log("Wins: " + this.newState.wins);
      this.setState(this.newState);
    }
    const win = () => {
      const praise = ["Well Done!", "Look at you go!", "Attaboy!"];

      this.newState.clicked.push(id);
      this.newState.wins++;
      this.newState.message = praise[Math.floor(Math.random() * praise.length)];
      console.log("Wins: " + this.newState.wins);
      this.setState(this.newState);
    }

    this.newState.clicked.includes(id) ? lose(): win();
    
    this.randomizeImages();
  }
  render(){
      return (
        <Jumbotron>
          <div className="jumbotron">
            <h2>{`Message:`}</h2>
              <p>{`${this.state.message}`}</p>
             
            <h2>{`Wins: ${this.state.wins}`}</h2>
            <h2>{`High Score: ${this.state.highScore}`}</h2>
            {this.state.images.map(image => (
              <Container>
                <button
                  onClick={this.handleClick}
                  id={image.id}
                  style={{
                    width:"150",
                    height:"150px",
                    padding: "0"
                  }}
                >
                  <ImageCard
                      id={image.id}
                      image={image.image}
                      clicked= {this.state.clicked}
                  />
                </button>
              </Container>

              // <button
              //   onClick={this.handleClick}
              //   id={image.id}
              //   >
              //   <Container 
              //     key={image.id}
              //     >
              //       <ImageCard
              //       id={image.id}
              //       image={image.image}
              //       clicked= {this.state.clicked}
              //       />
              //   </Container>
              //  </button>
            ))
            }
          </div>
        </Jumbotron>
      );
    }
}







export default App;
