'use strict';

const main = React.createElement;

class Background extends React.Component {
    render() {

        return(
        <img src={require('assets/bg0.jpg')}/>
    
        );
    }
}

class Game extends React.Component {
  render() {

    return(
        <div className="gameContainer">
            <div className="background">
                <Background />
            </div>
            <div className="sprite">
            </div>
            <div className="overlay">
            </div>
            <div className="interactive">
            </div>
            <div className="text">
            </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#game_container');
ReactDOM.render(main(Game), domContainer);