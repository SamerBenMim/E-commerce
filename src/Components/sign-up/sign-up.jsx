import React, { Component } from 'react'
import FormInput from "../form-input/form-input";
import CustomButtom from "../custom-buttom/custom-buttom";
import { auth,createUserProfileDocument } from "../../firebase/firebase.utils";
import './sign-up.scss'
export default class signUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:"",
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state
        
        if(password !== confirmPassword){
        alert("password don't match") 
        return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName})
        }catch(error){
            console.error(error)
        }
    }
    handleChange= e=> {
        const{name,value} = e.target ;
        this.setState({[name]: value});
    }
    
    render() {
        const {displayName,email,password,confirmPassword}=this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='Display Name'
                required
                />
                <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label='Email'
                required
                />
                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
                required
                />
                <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label='confirm Password'
                required
                />
                <CustomButtom type='submit' >Sign up</CustomButtom>
                </form>
            </div>
        )
    }
}
