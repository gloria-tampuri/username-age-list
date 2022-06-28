import React, {useState} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError]=useState()

    const enteredUsernameHandler=(event)=>{
        setEnteredUsername(event.target.value)
    }

    const enteredAgeHandler=(event)=>{
        setEnteredAge(event.target.value)
    }

    const addUserhandler=(event)=>{
        event.preventDefault()
        if(enteredUsername.trim().length ===0 || enteredAge.trim().length===0){
            setError({
                title:'An error occured',
                message:'please input a valid number. Input cant be empty'
            })
            return;
        }
        if (+enteredAge <1){
            setError({
                title:'An error occured',
                message:'please input a valid age. Age cant be less than 0'
            })
            return;
        }

        
        const name = enteredUsername
        const age = enteredAge

        props.onAddUser(name, age)
        setEnteredAge('');
        setEnteredUsername('');
        
      
        }

        const errorHandler=()=>{
            setError(null)
        }
       
    

  return (
   <>
   {error &&    <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>
}
    <Card className={classes.input}>

<form onSubmit={ addUserhandler}>
    <label htmlFor='username' >Username</label>
    <input id='username' type='text' value={enteredUsername} onChange={enteredUsernameHandler}/>
    <label htmlFor='age'>Age (Years)</label>
    <input type='number' id='age' value={enteredAge }onChange={enteredAgeHandler}/>
    <Button type='submit'> Add User </Button>
</form>
</Card></>
  )

}


export default AddUser