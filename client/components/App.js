class App extends React.Component {

  constructor() {
    super();
    this.state = {
      sheet: []; 
    };
    searchgoogle('fainting goat kittens', (data, context) => {
      context.setState({sheet: data.items});
    }, this);
  }

  setPlayer(vid) {
    this.setState({currentVideo: vid});
  }

  consumeAPI(query) {
    var query = $('#searchBar').val();
    var context = this;
    searchgoogle(query, function(data, context) {
      context.setState({videoData: data.items});
    }, context);
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <VideoList videos={this.state.videoData} setPlayer={this.setPlayer.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));