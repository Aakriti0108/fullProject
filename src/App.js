import React,{useState} from 'react';
import AddUI from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
   const [usersList,SetUsersList] = useState([]);
   
   let AddUserHandler = (uName,uAge)=>{
    SetUsersList((prevUserList)=>{
       return[...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
   }
  return (
    <div>
        <AddUI onAddUser = {AddUserHandler}/>  
        <UserList users={usersList}/> 
    </div>
  );
}

export default App;
