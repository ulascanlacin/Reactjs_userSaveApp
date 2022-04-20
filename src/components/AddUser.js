import React ,{Component}from 'react';



class AddUser extends Component {

    state = {
        name: "",
        email: ""
        
    };
    onNameChange(e){
        this.setState({
           name:e.target.value
        });
    }
    onEmailChange(e){
        this.setState({
           email:e.target.value
        });
    }
    onAddSubmit(e){
       const{addUser}=this.props;
       const {name,email}=this.state;
       const newUser={
        id:Math.floor((Math.random())*10),
        name:name,
        email:email


       };
       addUser(newUser);
       e.preventDefault();
    }
    

render(){
const{name,email}=this.state;
return(
<form onSubmit={this.onAddSubmit.bind(this)} >
<div className={"card"}>

    <h4 className={"card-header"}>Add New User</h4>
    <div className={"card-body"}>
        
            <div className={"form-group"}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id='name' placeholder='enter name ' className={"form-control"}
            value={name} onChange={this.onNameChange.bind(this)}/>
            </div>
        
    
    </div>
    <div className={"card-body"}>
        
            <div className={"form-group"}>
            <label htmlFor="email">Email</label>
            <input type="text" name="name" id='email' placeholder='enter email ' className={"form-control"} value={email} onChange={this.onEmailChange.bind(this)}/>
            </div>
        
    
    </div>
    <button  type='submit' className='btn btn-danger btn-block'>Add New User</button>

</div></form>

);

}
}
export default AddUser;