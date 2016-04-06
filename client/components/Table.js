var Table = (props) => (
  <div className="table">
    <table id="t01"> 
    <thead>
      <tr>
        <th>Time</th>
        <th>Description</th> 
        <th>Who</th>
        <th>Notes</th>
      </tr>
      </thead>
      <tbody>
      {props.rows.map(row =>
          <Row row={row}/>
      )}
      </tbody>
    </table>
  </div>
);

window.Table = Table;