import './App.css';
import React, { useState, useEffect } from 'react'
import UserForm from './Form'
import axios from 'axios'
import * as yup from 'yup'
import { schema } from './formSchema'
import User from './User'





/// INITIAL STATES ///
const initialFormValues = {
  // TEXT INPUT //
  name: '',
  email: '',
  password: '',
  // CHECKBOX //
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}


function App() {
  // STATES //
  const [user, setUser] = useState([])                               // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues)    // object
  const [formErrors, setFormErrors] = useState(initialFormErrors)    // object
  const [disabled, setDisabled] = useState(true)                     // boolean

  // HELPERS //
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(({data}) => {
        setUser(data.data)
        console.log(data)
      })
      .catch(error => console.log("Error Getting Users:", error))
  };

  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(({data}) => {
        setUser([data, ...user])
        console.log(data)
      })
      .catch(error => console.log("Error Posting Users:", error))
  }






  // EVENT HANDLERS //
  const inputChanges = (name, value) => {
    yup.reach(schema, name)
       .validate(value)
       .then(() => setFormErrors({
         ...formErrors,
         [name]: ''
       }))
       .catch(error => setFormErrors({
         ...formErrors,
         [name]: error.errors[0]
       }))
       setFormValues({
         ...formValues,
         [name]: value
       })
  }

  const submitForm = () => {
    postNewUser(formValues)
  }

  //// SIDE EFFECTS ///

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues])



  return (
    <div className='container'>
      <header><h1>User App</h1></header>

      <UserForm 
        values = {formValues}
        change = {inputChanges}
        submit = {submitForm}
        disabled = {disabled}
        errors = {formErrors}
      />

      {
        user.map(user => {
          return (
            <User key={user.id} data={user} />
          )
        })
      }
    </div>
  );
}

export default App;
