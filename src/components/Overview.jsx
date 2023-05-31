import React from "react";
import lists from '../lists.json';
import '../styles/_overview.scss';

const Overview = () => {
  return (
    <div className="overview">
      <div className="overviewDescription">
        <p>Muhammed Siraç Alakuş / README.md </p>
        <h1> Hi I'm Muhammed Siraç Alakuş </h1>
        <div className="line" />
        <h2> A React Developer </h2>
        <p>
          I love coding with Html , Css , Javascript , React , Redux , Bootstrap and others
        </p>
        <p> I'm improving in the Front-End</p>
        <p> Follow me on my Twitter , Instagram and YouTube channel </p>
      </div>

      <div className="repositories">
        <div className="repositoriesTitle">
          <h2>Popular Repositories</h2>
        </div>

        <div className="repositoriesContainer">
          {lists.map((repo, i) => (
            <div className="repositoriesBox" key={i}>
              <div className="repositoriesTop">
                <h3>{repo.repo}</h3>
                <p>{repo.status}</p>
              </div>
              <div className="repositoriesBottom">
                <p>{repo.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
