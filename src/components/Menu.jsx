import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/_menu.scss';

const Menu = () => {
  return (
    <div className='menu'>
        <div className="menuContainer">
            <p>
                Signed is as <br />
                Universe Code
            </p>

            <div className="lineThree" />

            <div className="menuStatus">
                <input type="text" placeholder='Set Status' />
            </div>

            <div className="lineThree" />

            <p>
                <Link to="/profile">Your Profile</Link>
            </p>
            <p>Your Repositories</p>
            <p>Your codespaces</p>
            <p>Your organizations</p>
            <p>Your project</p>
            <p>Your stars</p>
            <p>Your gists</p>

            <div className="lineThree" />

            <p>Upgrade</p>
            <p>Feature preview</p>
            <p>Help</p>
            <p>Settings</p>

            <div className="lineThree" />

            <p>Signout</p>
        </div>
    </div>
  )
}

export default Menu