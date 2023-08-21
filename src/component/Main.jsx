import React from "react";
import link from "../image/link.png";
import equal from "../image/equal.png";
import people from "../image/people.png";
import global from "../image/global.png";
import add from "../image/add.png";
import math from "../image/mm.png";
import dot from "../image/Group 6.png";
import calender from "../image/calendar_today.png";
import link2 from "../image/link2.png";

const Main = (prop) => {
  return (
    <div className={"main " + prop.silent}>
      <p className="heading hide">Assesment Overview</p>

      <section className="hide">
        <div className="total">
          <p>Total Assesment</p>
          <div className="inner-container">
            <img src={equal} alt="" />
            <div className="number">34</div>
          </div>
        </div>

        <div className="candidate">
          <p>Candidates</p>
          <div className="inner-container">
            <img src={people} alt="" />
            <div className="number">
              11,145 <span className="super">+89</span>
              <div className="subtext">Total Candidate</div>
            </div>
            <hr />
            <div className="number">
              114 <span className="super">+89</span>
              <div className="subtext">Who Attampted</div>
            </div>
          </div>
        </div>

        <div className="source">
          <p>Candidates Source</p>
          <div className="inner-container">
            <img src={global} alt="" srcset="" />
            <div className="number">
              11,000<span className="super">+89</span>
              <div className="subtext">E-mail</div>
            </div>
            <hr />
            <div className="number">
              145<span className="super">+89</span>
              <div className="subtext">Social Share</div>
            </div>
            <hr />
            <div className="number">
              145<span className="super">+89</span>
              <div className="subtext">Unique Link</div>
            </div>
          </div>
        </div>

        <div className="purpose">
          <p>Total Purpose</p>
          <div className="inner-container">
            <img src={link} alt="" />
            <div className="number">11</div>
          </div>
        </div>
      </section>

      <div className="top-bar">
        <p className="heading margin-top">My Assesment</p>
        <div className="hide2 logo">
        <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-filter"></i>
          <i class="fa-solid fa-chart-simple"></i>
        </div>
      </div>
      <section className={"cards " + prop.scroll}>
        <div className={"newass " + prop.silent}>
          <img src={add} alt="add" onClick={prop.value} />
          <p className="heading title">New Assesment</p>
          <div className="subtext info">
            From here can add questions of multiple types like MCQs, subjective
            (text or paragraph)!
          </div>
        </div>

        <div className={"ass " + prop.silent}>
          <figure>
            <div>
              <img src={math} alt="" />
            </div>
            <div>
              <img src={dot} alt="" />
            </div>
          </figure>
          <div>
            <p className="heading title">Math Assesment</p>
            <div className="subtitle">
              <p>Job</p>
              <div className="vr"></div>
              <div>
                <img src={calender} alt="" />
              </div>

              <p className="date">20 Apr 2023</p>
            </div>
          </div>
          <div className="dashed" />
          <div className="share">
            <div className="duration">
              <div>
                <p>00</p>
                <p className="subtext">Duration</p>
              </div>
              <div>
                <p>00</p>
                <p className="subtext">Questions</p>
              </div>
            </div>

            <div className="LP">
              <div className="link2">
                <img src={link2} alt="" />
                <span>Share</span>
              </div>
              <div className="circle">LP</div>
            </div>
          </div>
        </div>

        <div className={"ass " + prop.silent}>
          <figure>
            <div>
              <img src={math} alt="" />
            </div>
            <div>
              <img src={dot} alt="" />
            </div>
          </figure>
          <div>
            <p className="heading title">Math Assesment</p>
            <div className="subtitle">
              <p>Job</p>
              <div className="vr"></div>
              <div>
                <img src={calender} alt="" />
              </div>

              <p className="date">20 Apr 2023</p>
            </div>
          </div>
          <div className="dashed" />
          <div className="share">
            <div className="duration">
              <div>
                <p>00</p>
                <p className="subtext">Duration</p>
              </div>
              <div>
                <p>00</p>
                <p className="subtext">Questions</p>
              </div>
            </div>

            <div className="LP lp2">
              <div className="link2">
                <img src={link2} alt="" />
                <span>Share</span>
              </div>
              <div className="circle">LP</div>
              <div className="circle two">LP</div>
              <div className="circle three">LP</div>
            </div>
          </div>
        </div>

        <div className={"ass hide2 " + prop.silent}>
          <figure>
            <div>
              <img src={math} alt="" />
            </div>
            <div>
              <img src={dot} alt="" />
            </div>
          </figure>
          <div>
            <p className="heading title">Math Assesment</p>
            <div className="subtitle">
              <p>Job</p>
              <div className="vr"></div>
              <div>
                <img src={calender} alt="" />
              </div>

              <p className="date">20 Apr 2023</p>
            </div>
          </div>
          <div className="dashed" />
          <div className="share">
            <div className="duration">
              <div>
                <p>00</p>
                <p className="subtext">Duration</p>
              </div>
              <div>
                <p>00</p>
                <p className="subtext">Questions</p>
              </div>
            </div>

            <div className="LP lp2">
              <div className="link2">
                <img src={link2} alt="" />
                <span>Share</span>
              </div>
              <div className="circle">LP</div>
              <div className="circle two">LP</div>
              <div className="circle three">LP</div>
            </div>
          </div>
        </div>

        <div className={"ass hide2 " + prop.silent}>
          <figure>
            <div>
              <img src={math} alt="" />
            </div>
            <div>
              <img src={dot} alt="" />
            </div>
          </figure>
          <div>
            <p className="heading title">Math Assesment</p>
            <div className="subtitle">
              <p>Job</p>
              <div className="vr"></div>
              <div>
                <img src={calender} alt="" />
              </div>

              <p className="date">20 Apr 2023</p>
            </div>
          </div>
          <div className="dashed" />
          <div className="share">
            <div className="duration">
              <div>
                <p>00</p>
                <p className="subtext">Duration</p>
              </div>
              <div>
                <p>00</p>
                <p className="subtext">Questions</p>
              </div>
            </div>

            <div className="LP lp2">
              <div className="link2">
                <img src={link2} alt="" />
                <span>Share</span>
              </div>
              <div className="circle">LP</div>
              <div className="circle two">LP</div>
              <div className="circle three">LP</div>
            </div>
          </div>
        </div>

        <div className={"ass hide2 " + prop.silent}>
          <figure>
            <div>
              <img src={math} alt="" />
            </div>
            <div>
              <img src={dot} alt="" />
            </div>
          </figure>
          <div>
            <p className="heading title">Math Assesment</p>
            <div className="subtitle">
              <p>Job</p>
              <div className="vr"></div>
              <div>
                <img src={calender} alt="" />
              </div>

              <p className="date">20 Apr 2023</p>
            </div>
          </div>
          <div className="dashed" />
          <div className="share">
            <div className="duration">
              <div>
                <p>00</p>
                <p className="subtext">Duration</p>
              </div>
              <div>
                <p>00</p>
                <p className="subtext">Questions</p>
              </div>
            </div>

            <div className="LP lp2">
              <div className="link2">
                <img src={link2} alt="" />
                <span>Share</span>
              </div>
              <div className="circle">LP</div>
              <div className="circle two">LP</div>
              <div className="circle three">LP</div>
            </div>
          </div>
        </div>

        <div className={"ass hide2 " + prop.silent}>
          <figure>
            <div>
              <img src={math} alt="" />
            </div>
            <div>
              <img src={dot} alt="" />
            </div>
          </figure>
          <div>
            <p className="heading title">Math Assesment</p>
            <div className="subtitle">
              <p>Job</p>
              <div className="vr"></div>
              <div>
                <img src={calender} alt="" />
              </div>

              <p className="date">20 Apr 2023</p>
            </div>
          </div>
          <div className="dashed" />
          <div className="share">
            <div className="duration">
              <div>
                <p>00</p>
                <p className="subtext">Duration</p>
              </div>
              <div>
                <p>00</p>
                <p className="subtext">Questions</p>
              </div>
            </div>

            <div className="LP lp2">
              <div className="link2">
                <img src={link2} alt="" />
                <span>Share</span>
              </div>
              <div className="circle">LP</div>
              <div className="circle two">LP</div>
              <div className="circle three">LP</div>
            </div>
          </div>
        </div>
        <div className={"ass hide2 " + prop.silent}>
          <figure>
            <div>
              <img src={math} alt="" />
            </div>
            <div>
              <img src={dot} alt="" />
            </div>
          </figure>
          <div>
            <p className="heading title">Math Assesment</p>
            <div className="subtitle">
              <p>Job</p>
              <div className="vr"></div>
              <div>
                <img src={calender} alt="" />
              </div>

              <p className="date">20 Apr 2023</p>
            </div>
          </div>
          <div className="dashed" />
          <div className="share">
            <div className="duration">
              <div>
                <p>00</p>
                <p className="subtext">Duration</p>
              </div>
              <div>
                <p>00</p>
                <p className="subtext">Questions</p>
              </div>
            </div>

            <div className="LP lp2">
              <div className="link2">
                <img src={link2} alt="" />
                <span>Share</span>
              </div>
              <div className="circle">LP</div>
              <div className="circle two">LP</div>
              <div className="circle three">LP</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
