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

    const onChange = event => {
        const {name, value, checked, type} = event.target
        const inputValue = type === 'checkbox' ? checked : value
        change(name, inputValue)
    }

    return (
        <form className ='form container' onSubmit={onSubmit}>
            <div>
                <h4>Create Account:</h4>

                {/* /// TEXT INPUTS /// */}
                <label>Name&nbsp; 
                    <input
                        type='text'
                        value={values.name}
                        onChange={onChange}
                        name='Name'
                    />    
                </label><br/> <br/>

                <label>Email&nbsp;
                    <input 
                        type='text'
                        value={values.email}
                        onChange={onChange}
                        name='email'
                    />
                </label><br/> <br/>

                <label>Password&nbsp;
                    <input 
                        type='text'
                        value={values.password}
                        onChange={onChange}
                        name='password'
                    />
                </label><br/> <br/>
            </div>
                <h4>Please Select Checkbox</h4>

                {/* // CHECKBOX // */}
                
            <div>

            </div>
        </form>
    )
}