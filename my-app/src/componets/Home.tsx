import React, { useState } from 'react'
import "./Home.css";

const Home = () => {
    let [loading,setLoading] = useState(false);
    let [creds,userCreds]=useState({});
    // const handleChange = (e)=>{

    // }
    return (
        <>
            <div className='add_input'>
                <h1>Add User</h1>
                <form>
                    <div>
                        <label htmlFor="firstname" >First Name</label>
                        <input type="text" name='firstname' id="firstname" placeholder="Please Enter First Name" required />
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name='lastname' id="lastname" placeholder="Please Enter Last Name" required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" placeholder="Please Enter Phone number" required />
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" id="age" placeholder="Please Enter Phone number" required />
                    </div>
                </form>
                <input type="submit" id='submit' placeholder='Submit' />
            </div>
            <div className='user_details'>
                <h1>User Details</h1>
                <div className='userconstainer'>

                </div>
            </div>
        </>
    )
}

export default Home