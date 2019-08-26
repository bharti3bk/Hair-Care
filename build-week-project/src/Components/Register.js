import React from 'react'
import '../App.css'

function RegisterForm() {
    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label>User Name</label>
                    <input id ="regUserName" type="text" name="user-name" placeholder="User Name" />
                </div>
                <div class="field">
                    <label>Email</label>
                    <input id ="regEmail" type="text" name="Email" placeholder="Email" />
                </div>
                <div class="field">
                   <label>Password</label>
                    <input id = "regPassword" type="text" name="password" placeholder="Password" />
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default RegisterForm;