import React from 'react'

export default function UserForm(props) {
    const { 
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        change(name, inputValue);
    }

    return (
        <form className ='form container' onSubmit={onSubmit}>
            <div>
                <h3 className='h4'>Create Account:</h3>

                {/* /// TEXT INPUTS /// */}
              <div className='labels'>
                <label>Name 
                    <input 
                        value={values.name} 
                        onChange={onChange} 
                        name="name" 
                        type="text" 
                        placeholder="type here"
                    />  
                </label><br/> <br/>

                <label>Email
                    <input 
                        value={values.email} 
                        onChange={onChange} 
                        name="email" type="text" 
                        placeholder="type here"
                    />
                </label><br/> <br/>

                <label>Password
                    <input 
                        value={values.password} 
                        onChange={onChange} 
                        name="password" 
                        type="password" 
                        placeholder="type here"
                    />
                </label><br/> <br/>
              </div>
            </div>

                <h4>Please Select Checkbox</h4>

                {/* //// CHECKBOX //// */}
                <label>Terms of Sevice
                     <input 
                        value={values.terms} 
                        onChange={onChange} 
                        name="terms" type="checkbox"
                     />
                </label><br/>

                {/* //SUBMIT BUTTON */}
            <div>
                <button disabled={disabled}>SUBMIT</button>   

                <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div> 
            </div> 
        </form>
    )
}