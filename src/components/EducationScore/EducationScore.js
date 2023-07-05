import React from "react";
import { SiVerizon } from "react-icons/si";
import logo from "../../assets/logo2.png";
import profile from "../../assets/profile.png";
import classes from "./EducationScore.module.css";
import chart1 from "../../assets/chart1.png";
import chart2 from "../../assets/chart2.png";
import chart3 from "../../assets/chart3.png";
import bgScore from "../../assets/bgScore.png";

const EducationScore = () => {
  return (
    <div className={classes.page}>
      <div className={classes.bg}>
        <img src={bgScore} />
      </div>
      <div className={classes.main}>
        <div className={classes.line}></div>
        <div className={classes.container}>
          <div className={classes.logo}>
            <img src={logo} alt="logo image" />
          </div>
          <div className={classes.text}>
            <p>
              Congratulations! You've just finished a complete assessment of
              your talent and you're well on your way to discovering your ideal
              career path.
            </p>
          </div>
          <div className={classes.pages}>
            <div className={classes.cardMain}>
              <div className={classes.card}>
                <div className={classes.container2}>
                  <div className={classes.logo}>
                    <img src={logo} />
                  </div>
                  <div className={classes.profile}>
                    <p>
                      Yashar Nasibov, 23 year old <br />
                      Test date: 20/06/2023 <br />
                      Test ID: xxxxxxxxx
                      <br />
                    </p>
                    <img src={profile} />
                  </div>
                  <div className={classes.information}>
                    <p>
                      Yashar's test results position him in the 89th percentile,
                      indicating that he has outperformed 89% of his peers.
                    </p>
                    <p>
                      Furthermore, in terms of the overall percentile, Yashar is
                      placed in the 77th percentile, indicating that he is
                      better than 77 percent of everyone
                    </p>
                  </div>
                  <div className={`${classes.score} `}>
                    <div className={`${classes.chart1} ${classes.col3}`}>
                      <img src={chart2} />
                    </div>
                    <div className={classes.col3}>
                      <h6>Percentile Ranges</h6>
                      <div className={classes.price}>
                        <ul>
                          <li>0-20</li>
                          <li>21-40</li>
                          <li>41-60</li>
                          <li>61-80</li>
                          <li>81-100</li>
                        </ul>
                        <ul>
                          <li>Low</li>
                          <li>Marginal</li>
                          <li>Average</li>
                          <li>Good</li>
                          <li>Outstanding</li>
                        </ul>
                      </div>
                    </div>
                    <div className={`${classes.chart2} ${classes.col3}`}>
                      <img src={chart3} />
                    </div>
                  </div>
                  <div className={classes.text1}>
                    <p>
                      The following charts show your ability compared to peer
                      averages by field. A short description of each skill and
                      competency is included in the report
                    </p>
                  </div>
                  <div className={classes.chart3}>
                    <img src={chart1} />
                    <div className={classes.text2}>
                      <p>
                        Your general abilities tells that you're quite capable
                        and skillfull person. However your work experience is
                        not a lot. We offer you to focus on your work
                        experience....
                      </p>
                      <div className={classes.verifed}>NOT VERIFED</div>
                    </div>
                  </div>
                  <div className={classes.logoText}>
                    <img src={logo} />
                    <p>SÜNİ İNTELLEKT SİSTEMİ</p>
                  </div>
                </div>
              </div>
              <button className={classes.button}>
                Download or share your full report
              </button>
            </div>
            <div className={classes.premium}>
              <h2>Get your Premium Report</h2>
              <p>
                The free report represents just a few ideas based on your
                results, but there are many more possibilities to explore! Your
                full report offers a complete list of suggested fields,
                tailor-made for your individual interests.
              </p>
              <p>
                We are sure that your final and accurate results will bring you
                insight into your ideal career, self-improvement, best job
                offers and different suggestions based on your profile.
              </p>
              <div className={classes.cardPremium}>
                <h4>What you will get in the Premium Report </h4>
                <ul>
                  <li>
                    <SiVerizon className={classes.icon} />
                    Verified Certification
                  </li>
                  <li>
                    <SiVerizon className={classes.icon} />
                    Career Planning
                  </li>
                  <li>
                    <SiVerizon className={classes.icon} />
                    Job fit Assesment
                  </li>
                  <li>
                    <SiVerizon className={classes.icon} />
                    Talent bot
                  </li>
                  <li>
                    <SiVerizon className={classes.icon} />
                    Professional Development Guide
                  </li>
                  <li>
                    <SiVerizon className={classes.icon} />
                    ...
                  </li>
                </ul>
                <button className={classes.button}>
                  See the Premium report features and prices
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationScore;
