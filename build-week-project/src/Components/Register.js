import React from 'react'

function RegisterForm() {
    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label>User Name</label>
                    <input type="text" name="user-name" placeholder="User Name" />
                </div>
                <div class="field">
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Email" />
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
export default RegisterForm;