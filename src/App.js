import React from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';

class App extends React.Component {

  
  deleteUser(id){

    let  updatedUsers=this.state.users;
    updatedUsers=updatedUsers.filter(user => user.id !==id);
    this.setState({

      users:updatedUsers
    })

  }

  constructor() {
    super();
    this.state = {
      users: [
        {
          id:1,
          name:"Ulaş Can Laçın",
          email:"ulascan@gmail.com"

        },
        {
          id:2,
          name:"Emre Bibo",
          email:"emrebibo@gmail.com"

        },
        {
          id:3,
          name:"Uğurcan Öztürk",
          email:"ugurcanozturk@gmail.com"

        }

      ]
    };
    this.deleteUser=this.deleteUser.bind(this);
    this.addUser=this.addUser.bind(this);
  }
  addUser(newUser){
    let updatedUsers=this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users:updatedUsers

    });
  }
   

  render() {
    return (
      <div className="container">
        <h3 className={"text-center"}>User Save App</h3>
        <hr/>
        <AddUser addUser={this.addUser}/>
        <hr/>
        <Users deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    );
  }
}
export default App;