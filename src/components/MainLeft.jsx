import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import lists from "../lists.json";
import { Link } from "react-router-dom";

const MainLeft = () => {
  return (
    <div className="mainLeftContainer">
      <div className="mainLeft">
        <div className="mainLeftName">
          <img src="https://avatars.githubusercontent.com/u/102253572?v=4" alt="" />
          <h2>Muhammed Siraç Alakuş</h2>
          <IoMdArrowDropdown />
        </div>

        {/* Line */}
        <div className="line" />

        {/* Recent Repo */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Recent Repositories</h2>
            <button>New</button>
          </div>

          <div className="inputBox">
            <input type="text" placeholder="Find a repositories" />
          </div>
        </div>

        <div className="mainLeftLists">
          {lists.map((item, idx) => (
            <div className="item" key={idx}>
              <img src="https://avatars.githubusercontent.com/u/102253572?v=4" alt="" />
              <div>
                <h2>{`${item.name}/${item.repo}`}</h2>
              </div>
            </div>
          ))}
          <Link to="/profile">Show More</Link>
        </div>

        <div className="line" />

        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Recent Activities</h2>
          </div>
          <p>Thanks Fowr Watching</p>
        </div>

        <div className="line" />

        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Your Teams</h2>
          </div>
          <div className="inputBoxTwo">
            <input type="text" placeholder="Find a team..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
