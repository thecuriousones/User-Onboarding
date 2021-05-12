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
                <label>Name&nbsp; 
                    <input value={values.name} onChange={onChange} name="name" type="text"/>  
                </label><br/> <br/>

                <label>Email&nbsp;
                    <input value={values.email} onChange={onChange} name="email" type="text"/>
                </label><br/> <br/>

                <label>Password&nbsp;
                    <input value={values.password} onChange={onChange} name="password" type="text"/>
                </label><br/> <br/>
              </div>
            </div>
                <h4>Please Select Checkbox</h4>

                {/* // CHECKBOX // */}
                <label>Terms of Sevice
                    <input value={values.terms} onChange={onChange} name="checkbox" type="checkbox"/>
                </label><br/> 

            <div className="form-group submit">
                <button disabled={disabled}>SUBMIT</button>   

                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div> 
            </div> 
        </form>
    )
}