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
    clicked: [1],
    wins: 0,
    highScore: 0
  }
  handleClick = (image) => {
    const clickedImages = this.state.clicked;
    // console.log(image.id); 
    // console.log(clickedImages);

    const lose = () => {
      console.log("Tis been clicked before!! Game Over!");
      this.setState({
        wins: 0,
        clicked: [1]
      });
    }
    const win = () => {
      console.log("YESS!");
      this.setState({
        wins: this.state.wins + 1,
        clicked: this.state.clicked + this.state.newClick
      })
    }
    this.setState({newClick: image.id}, () => {
      console.log(this.state.clicked);
      console.log(this.state.newClick);
      clickedImages.map(clicked => ( 
        clicked === this.state.newClick ?  lose() : win()
      ))
    });
    // this.setState({newClick: image.id}, () => {
    //   console.log("Old: " + this.state.clicked); 
    //   for(var i = 0; i < clickedImages.length - 0; i++){
    //     console.log(clickedImages[i]);
    //     console.log(this.state.newClick);
    //     parseInt(clickedImages[i]) === this.state.newClick ? lose() : win()
    //   }
    // })

    // this.setState({clicked: this.state.clicked + image.id}, () => {



      // console.log(clickedImages);
    // });
    

    // this.state.clicked ? this.setState({clicked: true}) : console.log(false);
    // const lose = () => {
    //   alert("You've already guessed this!! Try Again");
    //   this.setState({wins:  0});
    //   console.log("False: " + this.state.clicked);
    // }
    // const win = () => {
    //   this.setState({
    //     wins : this.state.wins + 1,
    //     clicked: true
    //   });
    // }

      // this.state.clicked ? console.log("This has been clicked"): console.log("No click")
      // this.state.clicked ? lose() : win();
      // this.state.highScore < this.state.wins ? this.setState({highScore: this.state.wins}) : this.setState({highScore: this.state.highScore})

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
