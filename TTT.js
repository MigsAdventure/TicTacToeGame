const App = React.createClass({
  getInitialState() {
    return {
      currPlayer: 1,
      p1: [],
      p2: [],
      reset: ''
    }
  },

  cellClicked(cell){
    let {currPlayer, disable, p1, p2} = this.state;
    let currBtn = cell.target.id; //gets cells ID onclick
    let player = '';
    if (currPlayer === 1) {
        cell.target.innerHTML = "X";
        cell.target.disabled= true;
        this.setState({
      currPlayer: 0,
      p1:[...p1 , parseInt(currBtn)]
    }); 
       
    } else if (currPlayer === 0) {
      cell.target.innerHTML = 'O';
       this.setState({
      currPlayer: 1
    });
       p2:[...p2 , parseInt(currBtn)]
       cell.target.disabled= true; 
    }  
  }, //end of cellclicked

  resetTable() {
    let buttons =document.getElementsByTagName("button");
    for (var i=0; i < buttons.length -1 ; i++) {
      buttons[i].innerHTML = '';
      buttons[i].disabled = false;
    }
  },


  render() {
         return (
      <div>
        <table className="table">
          <tbody>
            <tr className="row">
              <td><button className="btn btn-lg btn-primary" id="1" onClick={this.cellClicked}></button></td>
              <td><button className="btn btn-lg btn-primary" id="2" onClick={this.cellClicked}></button></td>
              <td><button className="btn btn-lg btn-primary" id='3' onClick={this.cellClicked}></button></td>
            </tr>
            <tr className="row">
              <td><button className="btn btn-lg btn-primary" id='4' onClick={this.cellClicked}></button></td>
              <td><button className="btn btn-lg btn-primary" id='5' onClick={this.cellClicked}></button></td>
              <td><button className="btn btn-lg btn-primary" id='6' onClick={this.cellClicked}></button></td>
            </tr>
            <tr className="row">
              <td><button className="btn btn-lg btn-primary" id='7' onClick={this.cellClicked}></button></td>
              <td><button className="btn btn-lg btn-primary" id='8' onClick={this.cellClicked}></button></td>
              <td><button className="btn btn-lg btn-primary" id='9' onClick={this.cellClicked}></button></td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-danger btn-md" id="resetBtn" onClick={this.resetTable}>Reset</button>
      </div>
      )
  } //end of render
}); //end of main App

ReactDOM.render(
  <App/>, document.getElementById('root')
  );

