import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Radio from "../UI/Radio/Radio";
import classes from "./Stage1.module.css";
import { updateLangValue } from "../../store/action";
import { Select2 } from "../UI/Select/Select2";
import Select from "../UI/Select/Select";
import ChartBar from "../Chartbar";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/Input/Input";
import LangRadio from "../UI/LangRadio/LangRadio";

const Stage4 = (props) => {
  const [value1, setValue1] = useState([]);
  // console.log(value1);
  // console.log(value1[0]?.value==='ingilis');

  // const selectLangValue= [value1[0]?.value, value1[1]?.value ];
  // console.log(selectLangValue)

  const navigate = useNavigate();

  
  const todo = useSelector((state) => state.langValues);

  const dispatch = useDispatch();
  const [selectValues, setSelectValues] = useState({
    confirmlang1: todo.confirmlang1 === "" ? "" : todo.confirmlang1,
    confirmlang2: todo.confirmlang2 === "" ? "" : todo.confirmlang2,
    confirmlang3: todo.confirmlang3 === "" ? "" : todo.confirmlang3,
    confirmlangRus: todo.confirmlangRus === "" ? "" : todo.confirmlangRus,
    selectLang: todo.selectLang === [] ?  [] : todo.selectLang,
    selectIelts: todo.selectIelts === "" ? "" : todo.selectIelts,
    selectToefl: todo.selectToefl === "" ? "" : todo.selectToefl,
  });

  const handleSelectChange = (e) => {
    const { name, value } = e;
    console.log(e);
    setSelectValues((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChangeConfirm = (e) => {
    const { name, value } = e.target;
    setSelectValues((prevState) => ({ ...prevState, [name]: value }));
  };
  const optionsLang = [
    { value: "ingilis", label: "İngilis dili", name: "selectLang" },
    { value: "rus", label: "Rus dili", name: "selectLang" },
  ];
  const optionsIelts = [
    { value: "4.0", label: "4.0", name: "selectIelts" },
    { value: "4.5", label: "4.5", name: "selectIelts" },
    { value: "5.0", label: "5.0", name: "selectIelts" },
    { value: "5.5", label: "5.5", name: "selectIelts" },
    { value: "6.0", label: "6.0", name: "selectIelts" },
    { value: "6.5", label: "6.5", name: "selectIelts" },
    { value: "7.0", label: "7.0", name: "selectIelts" },
    { value: "7.5", label: "7.5", name: "selectIelts" },
    { value: "8.0", label: "8.0", name: "selectIelts" },
    { value: "8.5", label: "8.5", name: "selectIelts" },
    { value: "9.0", label: "9.0", name: "selectIelts" },
  ];
  
  useEffect(() => {
    dispatch(updateLangValue(selectValues));
    console.log(dispatch(updateLangValue(selectValues)));

  }, [selectValues]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(updateLangValue(selectValues));
    // console.log(dispatch(updateLangValue(selectValues)));
    // navigate("/stage5");
  };

  return (
    <Card>
      <div className={classes.education}>
        <h2>Dil Bilikləri</h2>
        <ChartBar currentPageIndex="1" maxPageIndex="2" />
        <form  onSubmit={submitHandler} >
          <div className={classes.educations__controls}>
            <div className={classes.education__control}>
              <label>Xarici dil bilikləriniz var?*</label>
              <div className={classes.education__control_Name}>
                <Radio
                  name="confirmlang1"
                  value="yes"
                  id="beli"
                  label="Bəli"
                  confirm={selectValues.confirmlang1 === "yes"}
                  changeHandlerRadio={handleChangeConfirm}
                  style1={{
                    color:
                      selectValues.confirmlang1 === "yes" ? "#038477" : "#444",
                  }}
                  style2={{
                    backgroundColor:
                      selectValues.confirmlang1 === "yes"
                        ? "#038477"
                        : "#f2f6f6",
                    appearance:
                      selectValues.confirmlang1 === "yes" ? "none" : "",
                  }}
                />
                <Radio
                  name="confirmlang1"
                  value="no"
                  id="xeyr"
                  label="Xeyr"
                  confirm={selectValues.confirmlang1 === "no"}
                  changeHandlerRadio={handleChangeConfirm}
                  style1={{
                    color:
                      selectValues.confirmlang1 === "no" ? "#038477" : "#444",
                  }}
                  style2={{
                    backgroundColor:
                      selectValues.confirmlang1 === "yes"
                        ? "#f2f6f6 "
                        : "#038477",
                    appearance:
                      selectValues.confirmlang1 === "no" ? "none" : "",
                  }}
                />
              </div>
            </div>

            {selectValues.confirmlang1 === "yes" && (
              <Select2
                label="Hansı xarici dili bilirsiz?*"
                multiple
                options={optionsLang}
                value={selectValues.selectLang}
                onChange={(e) => {
                  // setValue1(e); 
                const { name, value } = e;
                console.log(e);
                setSelectValues((prevState, selectLang ) => ({ ...prevState, selectLang: e}));}}
              />
            )}

            {(selectValues.selectLang[0]?.value === "ingilis" ||
              selectValues.selectLang[1]?.value === "ingilis") &&
              selectValues.confirmlang1 === "yes" && (
                <>
                  <label>
                    Hansı ingilis dili beynalxalq sertifikatınlz var?*
                  </label>
                  <div className={classes.education__control_Name}>
                    <Radio
                      name="confirmlang2"
                      value="ielts"
                      id="ielts"
                      label="İELTS"
                      confirm={selectValues.confirmlang2 === "ielts"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang2 === "ielts"
                            ? "#038477"
                            : "#444",
                      }}
                      style2={{
                        backgroundColor:
                          selectValues.confirmlang2 === "ielts"
                            ? "#038477"
                            : "#f2f6f6",
                        appearance:
                          selectValues.confirmlang2 === "ielts" ? "none" : "",
                      }}
                    />
                    <Radio
                      name="confirmlang2"
                      value="toefl"
                      id="toefl"
                      label="TOEFL"
                      confirm={selectValues.confirmlang2 === "toefl"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang2 === "toefl"
                            ? "#038477"
                            : "#444",
                      }}
                      style2={{
                        backgroundColor:
                          selectValues.confirmlang2 === "toefl"
                            ? "#038477 "
                            : "#f2f6f6",
                        appearance:
                          selectValues.confirmlang2 === "toefl" ? "none" : "",
                      }}
                    />
                    <Radio
                      name="confirmlang2"
                      value="yoxdur"
                      id="yoxdur"
                      label="Yoxdur"
                      confirm={selectValues.confirmlang2 === "yoxdur"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang2 === "yoxdur"
                            ? "#038477"
                            : "#444",
                      }}
                      style2={{
                        backgroundColor:
                          selectValues.confirmlang2 === "yoxdur"
                            ? "#038477 "
                            : "#f2f6f6",
                        appearance:
                          selectValues.confirmlang2 === "yoxdur" ? "none" : "",
                      }}
                    />
                  </div>
                </>
              )}
            {selectValues.confirmlang1 === "yes" &&
              (selectValues.selectLang[0]?.value === "ingilis" ||
              selectValues.selectLang[1]?.value === "ingilis") &&
              selectValues.confirmlang2 === "ielts" && (
                <div>
                  <Select
                    label="Ingilis dili IELTS nəticənizi qeyd edin*"
                    value1={selectValues.selectIelts}
                    changeHandlerSelect={handleSelectChange}
                    options={optionsIelts}
                  />
                </div>
              )}
            {selectValues.confirmlang1 === "yes" &&
              (selectValues.selectLang[0]?.value === "ingilis" ||
              selectValues.selectLang[1]?.value === "ingilis") &&
              selectValues.confirmlang2 === "toefl" && (
                <div className={classes.lang__input}>
                  <Input
                    value={selectValues.selectToefl}
                    type="text"
                    name="selectToefl"
                    placeholder=""
                    label="Ingilis dili TOEFL İBT nəticənizi qeyd edin"
                    changeHandlerText={handleChangeConfirm}
                  />
                </div>
              )}
            {selectValues.confirmlang1 === "yes" &&
              (selectValues.selectLang[0]?.value === "ingilis" ||
              selectValues.selectLang[1]?.value === "ingilis") &&
              selectValues.confirmlang2 === "yoxdur" && (
                <>
                  <label>İngilis dili üzrə səviyyənizi qeyd edin?*</label>
                  <div
                    className={classes.education__control_Name}
                    style={{ flexWrap: "wrap", paddingTop: "0" }}
                  >
                    <Radio
                      name="confirmlang3"
                      value="a1ing"
                      id="a1ing"
                      label="A1 (Başlanqıc)"
                      confirm={selectValues.confirmlang3 === "a1ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "a1ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "a1ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="a2ing"
                      id="a2ing"
                      label="A2(Elementar)"
                      confirm={selectValues.confirmlang3 === "a2ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "a2ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "a2ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="b1ing"
                      id="b1ing"
                      label="B1 (İlkin orta)"
                      confirm={selectValues.confirmlang3 === "b1ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "b1ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "b1ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="b2ing"
                      id="b2ing"
                      label="B2 (İlkin orta)"
                      confirm={selectValues.confirmlang3 === "b2ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "b2ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "b2ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="c1ing"
                      id="c1ing"
                      label="C1 (Üst orta)"
                      confirm={selectValues.confirmlang3 === "c1ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "c1ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "c1ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="c2ing"
                      id="c2ing"
                      label="C2 (İrəli)"
                      confirm={selectValues.confirmlang3 === "c2ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "c2ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "c2ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                  </div>
                </>
              )}
            {selectValues.confirmlang1 === "yes" &&
              (selectValues.selectLang[0]?.value === "rus"  &&  selectValues.selectLang[1]?.value !== "ingilis") && (
                <>
                  <label>Rus dili üzrə səviyyənizi qeyd edin?*</label>

                  <div
                    className={classes.education__control_Name}
                    style={{ flexWrap: "wrap", paddingTop: "0" }}
                  >
                    <Radio
                      name="confirmlang3"
                      value="a1ing"
                      id="a1ing"
                      label="A1 (Başlanqıc)"
                      className={classes.radioLang}
                      confirm={selectValues.confirmlang3 === "a1ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "a1ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "a1ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="a2ing"
                      id="a2ing"
                      label="A2(Elementar)"
                      confirm={selectValues.confirmlang3 === "a2ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "a2ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "a2ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="b1ing"
                      id="b1ing"
                      label="B1 (İlkin orta)"
                      confirm={selectValues.confirmlang3 === "b1ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "b1ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "b1ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="b2ing"
                      id="b2ing"
                      label="B2 (İlkin orta)"
                      confirm={selectValues.confirmlang3 === "b2ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "b2ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "b2ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="c1ing"
                      id="c1ing"
                      label="C1 (Üst orta)"
                      confirm={selectValues.confirmlang3 === "c1ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "c1ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "c1ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                    <Radio
                      name="confirmlang3"
                      value="c2ing"
                      id="c2ing"
                      label="C2 (İrəli)"
                      confirm={selectValues.confirmlang3 === "c2ing"}
                      changeHandlerRadio={handleChangeConfirm}
                      style1={{
                        color:
                          selectValues.confirmlang3 === "c2ing"
                            ? "white"
                            : "black",
                        backgroundColor:
                          selectValues.confirmlang3 === "c2ing"
                            ? "#038477"
                            : "#f2f6f6",
                      }}
                      style2={{ appearance: "none" }}
                    />
                  </div>
                </>
              )}
           {selectValues.confirmlang1 === "yes" &&
              ((selectValues.selectLang[0]?.value === "rus" && selectValues.selectLang[1]?.value === "ingilis") || (selectValues.selectLang[0]?.value === "ingilis" && selectValues.selectLang[1]?.value === "rus")) &&   
                
               (<div className={classes.langRadio}>
              <label>Rus dili üzrə səviyyənizi qeyd edin?*</label> 
              <LangRadio
                className={classes.radio}
                name="confirmlangRus"
                value1="a1rus"
                value2="a2rus"
                value3="b1rus"
                value4="b2rus"
                value5="c1rus"
                value6="c2rus"
                confirm1={selectValues.confirmlangRus === "a1rus"}
                confirm2={selectValues.confirmlangRus === "a2rus"}
                confirm3={selectValues.confirmlangRus === "b1rus"}
                confirm4={selectValues.confirmlangRus === "b2rus"}
                confirm5={selectValues.confirmlangRus === "c1rus"}
                confirm6={selectValues.confirmlangRus === "c2rus"}
                changeHandlerRadio={handleChangeConfirm}
              />
            </div>)}
          </div>
          <div className={classes.buttons}>
            <Button className={classes.button} onClick={() => navigate(-1)}>
              Geri
            </Button>
            <Button onClick={() => navigate('/stage5')}>Növbəti </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
export default Stage4;
