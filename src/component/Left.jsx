import React from "react";
import dashboard from "../image/dashboard.png"
import quiz from "../image/quiz.png"
import admin from "../image/admin_meds.png"

const Left = (prop) => {
  return (
    <div className={prop.state + " " + prop.silent2}>
      <div className="item hide2">
        
        <p>Menue</p>
        <i className="fa-solid fa-x fa-xs" onClick={prop.change2}></i>
      </div>
      <div className="item">
        <img src={dashboard} alt="" />
        <p>Dashboard</p>
      </div>

      <div className="item active">
        <i className="fa-solid fa-pen-to-square"></i>
        <p>Assesment</p>
      </div>

      <div className="item">
      <img src={quiz} alt="" />
        <p>My Library</p>
      </div>

      <hr />

      <div className="item">
        <h5>Admin</h5>
        <div>
        <img src={admin} alt="" />
        <p>Round Status</p>
        </div>
      </div>
    </div>
  );
};

export default Left;
