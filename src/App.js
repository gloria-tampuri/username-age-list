import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
 
   const addUserHandler=(uName, uAge)=>{
    setUsersList((previousUser)=>(
      [...previousUser,{name:uName, age:uAge, id:Math.random()}]
    ))
   }
 
 
 
  return (
    <div >
     <AddUser onAddUser={addUserHandler}/>
     <UsersList users={usersList}/>
    </div>
  );
}

export default App;
