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
            <div
        </form>
    )
}