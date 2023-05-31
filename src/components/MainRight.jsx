import React from 'react';
import {IoBulbOutline} from "react-icons/io5";
import {MdRssFeed} from "react-icons/md";
import {AiOutlineGithub} from "react-icons/ai";

import '../styles/_mainRight.scss';
import { Link } from 'react-router-dom';

const MainRight = () => {
  return (
    <div className="mainRight">
      <div className="mainRightContainer">
        <div className="mainRightText">
          <h2>Following</h2>
          <h2>For You</h2>
        </div>

        <div className="lineTwo" />

        <div className="box">
          <h2>Welcome... This is Github clone with React.js, Sass and React Router </h2>
          <p>Follow me on <span>Youtube</span>, <span>Twitter</span> and <span>Instagram</span> </p>
          <button className="btn">
            <Link to="/profile">Github Clone</Link>
          </button>
        </div>

        <div className="boxCenter">
          <div className="boxCenterFirst">
            <IoBulbOutline />
          <p>On my channel there are videos with <span>React</span>, <span>Next.js</span>, <span>Bootstrap</span> HTML and Css</p>
          </div>

          <div className="boxCenterFirst">
            <MdRssFeed />
            <p>Subscride to the channel, to say updated.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footerFirst">
            <AiOutlineGithub  className='svg'/>
            <h4>Github Clone</h4>
          </div>

          <div className="footerSecond">
            <div className="footerSecondInside">
              <h4>Blog</h4>
              <h4>About</h4>
              <h4>Shop</h4>
              <h4>Github Clone</h4>
              <h4>Pricing</h4>
            </div>
            <div className="footerSecondInside">
              <h4>API</h4>
              <h4>Training</h4>
              <h4>Status</h4>
              <h4>Security</h4>
            </div>
            <div className="footerSecondInside">
              <h4>Terms</h4>
              <h4>Privacy</h4>
              <h4>Docs</h4>
            </div>
          </div>
        </div>

        <div className="lineTwo" />

      </div>
    </div>
  )
}

export default MainRight