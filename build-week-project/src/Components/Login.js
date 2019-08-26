import React from 'react'
import '../App.css'

function LoginForm() {
    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label>UserName</label>
                    <input id ="userName" type="text" name="user-name" placeholder="User Name" />
                </div>
                <div class="field">
                    <label>Password</label>
                    <input  id ="password" type="text" name="password" placeholder="Password" />
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default LoginForm;