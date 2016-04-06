class Row extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.row.time}</td>
        <td>{this.props.row.desc}</td> 
        <td>{this.props.row.who}</td>
        <td>{this.props.row.notes}</td>
      </tr>
    );
  }
}

window.Row = Row;
