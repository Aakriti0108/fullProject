import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) =>{

   let [enteredUserName,SetUserName] = useState('');
   let [enteredAge,SetAge] = useState('');
   let [error,setError] = useState();

    let addUserHandler=(event)=>{
         event.preventDefault();
         if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 ){
          setError({
            title:'Invalid input',
            message:'Please enter a valid name and age'
          })
          return;
         }
         if(+enteredAge < 1){
          setError({
            title:'Invalid input',
            message:'Please enter a valid age greater than 0'
          })
          return;
         }
         console.log(enteredUserName,enteredAge);
         props.onAddUser(enteredUserName,enteredAge);
         SetUserName('')
         SetAge('')
    }

    let UserNameHandlerChange = (event) =>{
      // console.log(event.target.value);
      SetUserName(event.target.value);
    
    }

    let AgeHandlerChange = (event) =>{
      // console.log(event.target.value);
      SetAge(event.target.value);
    }

    let errorHandler = () =>{
      setError(null);
    }

  return(
    <>
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label>NAME</label>
        <input type="text" value={enteredUserName} onChange={UserNameHandlerChange}/>
        <label>Age</label>
        <input type="number"  value={enteredAge} onChange={AgeHandlerChange}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </>
   
  )  

}

export default AddUser;