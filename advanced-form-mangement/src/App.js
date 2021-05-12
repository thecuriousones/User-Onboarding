import './App.css';
import React, { useState, useEffect } from 'react'
import UserForm from './Form'




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





  // EVENT HANDLERS //
  const inputChanges = (name, value) => {}

  const submitForm = () => {}






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
    </div>
  );
}

export default App;
