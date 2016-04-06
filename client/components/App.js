class App extends React.Component {

  constructor() {
    super();
    this.state = {
      sheet: [],
      loggedIn: false
    };
    $.get('/login').done(function(data) {
      if (data === 'yes') {
        this.setState({loggedIn: true})
      }
    },this);
  }

  getSheet() {
    $.get('/sheet').done(function(data) {
      this.setState({sheet: data})
    }.bind(this));
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <div className="col-md-12">
            <button onClick={this.getSheet.bind(this)}>Update Sheet</button>
            <Table rows={this.state.sheet}/>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <a href="/auth/google">Log In</a>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));