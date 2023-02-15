import React from 'react'

const Login = () => {
    return (
        <div className='admin_login'>
            <form>
                <h1>Please Admin Login First</h1>
                <label htmlFor="firstname" >First Name</label>
                <input type="text" name='firstname' id="firstname" placeholder="Please Enter First Name" required />
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name='lastname' id="lastname" placeholder="Please Enter Last Name" required />
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" placeholder="Please Enter Phone number" required />
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" placeholder="Please Enter Phone number" required />
                <input type="submit" id='submit' placeholder='Submit' />
            </form>
        </div>
    )
}

export default Login