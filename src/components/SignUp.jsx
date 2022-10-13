import React, {useState} from 'react'
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');
const SignUp = () => {
    const [signupState,setSignupState]=useState(fieldsState);
    const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});
    const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    }
    return (
        <form onSubmit={handleSubmit} className='mt-8 space-y-8 px-10 py-8 shadow-md rounded-xl bg-white'>
            <h3 className='font-bold text-4xl pt-4'>Support SignUp</h3>
            <>
                {fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}        
                    />)
                }
                <FormAction handleSubmit={handleSubmit} text="Signup" />
                <p className='pt-5'>Already registered? 
                    <a href="/sign-in" className='text-[#009ad9] font-bold underline'>Sign in</a>
                </p>
            </>
        </form>
    )
}

export default SignUp