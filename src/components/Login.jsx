import React, {useState} from 'react'
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormAction from './FormAction'

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

const Login = () => {
    const [loginState,setLoginState]=useState(fieldsState);
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <form handleSubmit={handleSubmit} className=' mt-8  px-10 py-8 rounded-xl bg-white shadow-md'>
            <h1 className='font-bold text-4xl pb-8 pt-6'>Support Login</h1>
            <>
                {fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                    />)
                }
            </>
            <FormAction handleSubmit={handleSubmit} text="Login"/>
            <p className='pt-6'>
                <a href="/sign-up" className='text-[#009ad9] font-bold underline'>or Register</a> 
            </p>
        </form>
    )
}

export default Login