import React from "react";

const Header = (prop) => {

  return (
    <div>
      <div className={"header " +prop.silent}>
        <div className="tittle">
          <i className="fa-solid fa-bars" onClick={prop.change1}></i>
          <p className="first">Assesment</p>
          <hr />
          <p className="second">My Assesments</p>
        </div>

        <div>
          <i className="fa-solid fa-mobile-screen"></i>
          <i className="fa-solid fa-laptop hide2"></i>
        </div>
      </div>
      <div className="underline"></div>
      <hr />
      {/* ----------------------------------- */}
      <div>
      <div className={"fixed " + prop.silent}>
      <p className="blue">My Assesments</p>
      <p className="gray">Unstop Assesments</p>
      </div>
      <hr className="mobile-ul"/>
      </div>
      
    </div>
  );
};

export default Header;
