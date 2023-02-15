import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar' className="bg-coral border-gray-200 flex justify-around shadow rounded">
            <Link to={"/"}  className="flex items-center">
                <img src="https://ineuron.ai/images/ineuron-logo.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            </Link>
            <Link to={"/"}><span className="self-center text-xl font-semibold whitespace-nowrap text-white">Home</span></Link>
            <Link to={"/login"}><span className="self-center text-xl font-semibold whitespace-nowrap text-white">Login</span></Link>
        </div>

    )
}

export default Navbar