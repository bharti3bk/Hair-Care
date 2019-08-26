import React from 'react' 
import {Link} from 'react-router-dom'
import '../App.css'

function LoginForm() {
    return (
        <div> 
             <h1>LoginForm</h1> 
            <form class="ui form">
                <div class="field">
                    <label>UserName</label>
                    <input id ="userName" type="text" name="user-name" placeholder="User Name" />
                </div>
                <div class="field">
                    <label>Password</label>
                    <input  id ="password" type="text" name="password" placeholder="Password" />
                </div>
                <button class="ui button" id = "loginSubmit" type="submit">Submit</button> 
                <div>
                <Link to ="/reg">Not Enrolled ? Sign up now </Link>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;