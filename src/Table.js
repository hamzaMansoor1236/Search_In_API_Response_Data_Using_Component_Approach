



function Table(props) {

  
 
    return (<table className="table border">
    <thead className="thead-light ">
      <tr>
        <th >id</th>
        <th >Name</th>
        <th >Email</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
    {props.dataArr.map((user) => (
    <tr key={user.id} >
    
      <td> {user.id}</td>  
      <td> {user.name}</td>   
      <td> {user.email}</td> 
      <td> {user.address.street} , {user.address.city}</td>
    
    </tr>
    ))}
    </tbody>
    </table>)
  }
  
  export default Table;