import React from "react";
import classes from "./EducationItem.module.css";

import bgImg from "../../assets/bg.png";
import logoImg from "../../assets/logo.png";
import compImg from "../../assets/komputer.png";
import { Outlet, useLocation } from "react-router-dom";
import Stage1 from "./Stage1";

const EducationItem = (props) => {
  const location = useLocation();
  // console.log(location);
  return (
    <div className={classes.main}>
      <header>
        <div className={classes.bg}>
          <img src={bgImg} alt="bg image" />
        </div>
        <div className={classes.section1}>
          <div className={classes.box1}></div>
          <div className={classes.box2}></div>
          <div className={classes.box3}>
            <div className={classes.logo}>
              <img src={logoImg} alt="logo image" />
              <p>Süni intellekt sistemi</p>
            </div>
            <p>
              Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxsı
              hansı faizlikdə oldugunuzu müəyyən edə biləcəksiniz.
            </p>
          </div>
        </div>
        <div className={classes.compImg}>
          <img src={compImg} />
        </div>
        <ol className={classes.educationList}>
          <li
            className={`${
              location.pathname === "/" ||
              location.pathname === "/stage/stage2" ||
              location.pathname === "/stage/stage3" ||
              location.pathname === "/stage3"
                ? classes.active
                : ""
            }`}
          >
            Təhsil
          </li>
          <li
            className={`${
              location.pathname === "/stage/stage4" ||
              location.pathname === "/stage/stage5"
                ? classes.active
                : ""
            }`}
          >
            Dil bilikləri
          </li>
          <li>Xüsusi bacarıqlar</li>
          <li>İdman</li>
          <li>Proqram bilikləri</li>
        </ol>
      </header>
      <main>
        <Stage1 />
        <Outlet />
      </main>
    </div>
  );
};
export default EducationItem;
