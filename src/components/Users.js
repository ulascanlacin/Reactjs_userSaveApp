import React,{ Component} from "react";
import User from './User';
class Users extends  Component{


render(){

const{users,deleteUser}=this.props;
return(
  <div>
 <table className="table table table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
   {users.map(user =>{
       const{id,name,email}=user;
       return <User 
                key={id}
                id={id}
                name={name}
                email={email}
                deleteUser={deleteUser}
                />;
   })}
   
  </tbody>
</table>
</div>
  
  
  );
}
}

export default Users;