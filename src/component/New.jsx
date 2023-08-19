import React from "react";

const New = (prop) => {
  return (
    <div id="create" className={prop.value}>
      <div className="header2">
        <p className="first">Create new assesment</p>
        <i className="fa-solid fa-x" onClick={prop.value2}></i>
      </div>
      <hr />
      <form action="">
        <div>
          <label htmlFor="Name of assesment" className="heading">
            Name of assesment{" "}
          </label>
          <div>
            <input type="text" placeholder="Type here" />
          </div>
        </div>

        <div>
          <label htmlFor="Purpose of the test is" className="heading">
            Purpose of the test is{" "}
          </label>
          <select name="" id="">
            <option value="select">Select</option>
          </select>
        </div>

        <div>
          <label htmlFor="Discription" className="heading">
            Discription{" "}
          </label>
          <select name="" id="">
            <option value="select">Select</option>
          </select>
        </div>

        <div>
          <label htmlFor="Skills" className="heading">
            Skills
          </label>
          <div className="skill">
            <div>
                <p>UI/UX and Design</p>
                <i class="fa-solid fa-x fa-xs"></i>
            </div>
            <div>
                <p>UI/UX and Design</p>
                <i class="fa-solid fa-x fa-xs"></i>
            </div>
            <div>
                <p>UI/UX and Design</p>
                <i class="fa-solid fa-x fa-xs"></i>
            </div>
            <div>
                <p>UI/UX and Design</p>
                <i class="fa-solid fa-x fa-xs"></i>
            </div>
            <div>
                <p>UI/UX and Design</p>
                <i class="fa-solid fa-x fa-xs"></i>
            </div>
          </div>
          <input type="text" placeholder="Type here" className="skill2"/>
        </div>

        <div>
          <label htmlFor="Duration of assesment" className="heading">
            Duration of assesment
          </label>
          <input type="text" placeholder="HH:MM:SS" />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default New;
