import React from 'react'

function LoginForm() {
    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label>UserName</label>
                    <input type="text" name="user-name" placeholder="User Name" />
                </div>
                <div class="field">
                    <label>Password</label>
                    <input type="text" name="password" placeholder="Password" />
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default LoginForm;