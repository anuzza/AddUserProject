import React, {useState, Fragment} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler =(uName, uAge)=>{
    setUserList((prevList)=>{
      return [...prevList, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  }


  

//Alternate:  USE JUST <React. Fragment> BY 
  
  return (
    <Fragment>
      
      <AddUser onAddUser={addUserHandler} />
      <UsersList users = {userList}/>
      
      

    </Fragment>
  );
}

export default App;
