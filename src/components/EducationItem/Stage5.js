import React, { useState, useEffect } from 'react';
import classes from './Stage5.module.css';
import Card from '../UI/Card/Card';
import ChartBar from '../Chartbar';
import Button from '../UI/Button/Button';
import LangRadio from '../UI/LangRadio/LangRadio';
import { useNavigate } from 'react-router-dom';
import { updateLangValue } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";


const Stage5 = () => {
    // const [isSelectAdd, setIsSelectAdd] = useState(false);
    // const [isAlmanLang, setIsAlmanLang] = useState(false);
    // const [isIspanLang, setIsIspanLang] = useState(false);
    // const [isFransizLang, setIsFransizLang] = useState(false);
    // const [isYaponLang, setIsYaponLang] = useState(false);
    // const [isTurkLang, setIsTurkLang] = useState(false);
    // const [isItalyanLang, setIsItalyanLang] = useState(false);

    const todo = useSelector((state) => state.langValues);
    const dispatch = useDispatch();

    const [selectValues, setSelectValues] = useState({
        almanLang: todo.almanLang === '' ? '' : todo.almanLang,
        ispanLang: todo.ispanLang === '' ? '' : todo.ispanLang,
        fransizLang: todo.fransizLang === '' ? '' : todo.fransizLang,
        yaponLang: todo.yaponLang === '' ? '' : todo.yaponLang,
        turkLang: todo.turkLang === '' ? '' : todo.turkLang,
        italyanLang: todo.italyanLang === '' ? '' : todo.italyanLang,
        isSelectAdd: todo.isSelectAdd === false ? false : todo.isSelectAdd,
        isAlmanLang: todo.isAlmanLang === false ? false : todo.isAlmanLang,
        isIspanLang: todo.isIspanLang === false ? false : todo.isIspanLang,
        isFransizLang: todo.isFransizLang === false ? false : todo.isFransizLang,
        isYaponLang: todo.isYaponLang === false ? false : todo.isYaponLang,
        isTurkLang: todo.isTurkLang === false ? false : todo.isTurkLang,
        isItalyanLang: todo.isItalyanLang === false ? false : todo.isItalyanLang,
    });
    console.log(selectValues.topping)
    const changeHandlerLang = (e) => {
        const { name, value } = e.target;
        setSelectValues((prevState) => ({ ...prevState, [name]: value }));
    }
    const navigate = useNavigate();
    // const changeHandlerGerm anyLang = (e) =>{
    //     setTopping(e.target.value);
    // }
    const clickHandlerButton = () => {
        const name = 'isSelectAdd';
        setSelectValues((prevState) => ({ ...prevState, [name]: !prevState.isSelectAdd }));
        // selectValues.isSelectAdd = !selectValues.isSelectAdd;
        // console.log(selectValues.isSelectAdd)
    }
    useEffect(() => {
        dispatch(updateLangValue(selectValues));
        console.log(dispatch(updateLangValue(selectValues)));

    }, [selectValues])
    return (
        <Card>
            <div className={classes.education}>
                <h2>Dil Bilikləri</h2>
                <ChartBar currentPageIndex='2' maxPageIndex='2' />
                <Button onClick={clickHandlerButton} className={classes.button}>Əlavə et <div></div></Button>
                {selectValues.isSelectAdd && <div className={classes.buttons}>
                    <button
                        className={classes.button2}
                        onClick={() => {
                            const name1 = 'isAlmanLang';
                            const name2 = 'isSelectAdd';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: false }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: true }));

                        }}
                    >
                        Alman dili
                    </button>
                    <button className={classes.button2}
                        onClick={() => {
                            const name1 = 'isIspanLang';
                            const name2 = 'isSelectAdd';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: false }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: true }));
                        }}
                    >
                        İspan dili
                    </button>
                    <button className={classes.button2}
                        onClick={() => {
                            const name1 = 'isFransizLang';
                            const name2 = 'isSelectAdd';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: false }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: true }));
                        }}
                    >
                        Franız dili
                    </button>
                    <button className={classes.button2}
                        onClick={() => {
                            const name1 = 'isYaponLang';
                            const name2 = 'isSelectAdd';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: false }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: true }));
                        }}
                    >
                        Yapon dili
                    </button>
                    <button className={classes.button2}
                        onClick={() => {
                            const name1 = 'isTurkLang';
                            const name2 = 'isSelectAdd';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: false }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: true }));
                        }}
                    >
                        Türk dili
                    </button>
                    <button className={classes.button2}
                        onClick={() => {
                            const name1 = 'isItalyanLang';
                            const name2 = 'isSelectAdd';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: false }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: true }));
                        }}
                    >
                        İtalyan dili
                    </button>
                </div>}
                <div className={classes.selectLang}>
                    {selectValues.isAlmanLang && <><LangRadio
                        onClick={() => { 
                            const name1 = 'isAlmanLang';
                            const name2 = 'almanLang';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: '' }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: false }));
                        }}
                        langName='Alman dili'
                        name='almanLang'
                        value1='a1alman' value2='a2alman' value3='b1alman' value4='b2alman' value5='c1alman' value6='c2alman'
                        confirm1={selectValues.almanLang === 'a1alman'} confirm2={selectValues.almanLang === 'a2alman'} confirm3={selectValues.almanLang === 'b1alman'}
                        confirm4={selectValues.almanLang === 'b2alman'} confirm5={selectValues.almanLang === 'c1alman'} confirm6={selectValues.almanLang === 'c2alman'}
                        changeHandlerRadio={changeHandlerLang}

                    /><br /><br /><br /></>}
                    {selectValues.isIspanLang && <><LangRadio
                        onClick={() => { 
                            const name1 = 'isIspanLang';
                            const name2 = 'ispanLang';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: '' }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: false }));
                        }}
                        langName='Ispan dili'
                        name='ispanLang'
                        value1='a1ispan' value2='a2ispan' value3='b1ispan' value4='b2ispan' value5='c1ispan' value6='c2ispan'
                        confirm1={selectValues.ispanLang === 'a1ispan'} confirm2={selectValues.ispanLang === 'a2ispan'} confirm3={selectValues.ispanLang === 'b1ispan'}
                        confirm4={selectValues.ispanLang === 'b2ispan'} confirm5={selectValues.ispanLang === 'c1ispan'} confirm6={selectValues.ispanLang === 'c2ispan'}
                        changeHandlerRadio={changeHandlerLang}

                    /><br /><br /><br /> </>}
                    {selectValues.isFransizLang && <><LangRadio
                        onClick={() => { 
                            const name1 = 'isFransizLang';
                            const name2 = 'fransizLang';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: '' }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: false }));
                        }}
                        langName='Fransız dili'
                        name='fransizLang'
                        value1='a1fransiz' value2='a2fransiz' value3='b1fransiz' value4='b2fransiz' value5='c1fransiz' value6='c2fransiz'
                        confirm1={selectValues.fransizLang === 'a1fransiz'} confirm2={selectValues.fransizLang === 'a2fransiz'} confirm3={selectValues.fransizLang === 'b1fransiz'}
                        confirm4={selectValues.fransizLang === 'b2fransiz'} confirm5={selectValues.fransizLang === 'c1fransiz'} confirm6={selectValues.fransizLang === 'c2fransiz'}
                        changeHandlerRadio={changeHandlerLang}
                    /><br /><br /><br /> </>}
                    {selectValues.isYaponLang && <> <LangRadio
                        onClick={() => { 
                            const name1 = 'isYaponLang';
                            const name2 = 'yaponLang';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: '' }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: false }));
                        }}
                        langName='Yapon dili'
                        name='yaponLang'
                        value1='a1yapon' value2='a2yapon' value3='b1yapon' value4='b2yapon' value5='c1yapon' value6='c2yapon'
                        confirm1={selectValues.yaponLang === 'a1yapon'} confirm2={selectValues.yaponLang === 'a2yapon'} confirm3={selectValues.yaponLang === 'b1yapon'}
                        confirm4={selectValues.yaponLang === 'b2yapon'} confirm5={selectValues.yaponLang === 'c1yapon'} confirm6={selectValues.yaponLang === 'c2yapon'}
                        changeHandlerRadio={changeHandlerLang}
                    /><br /><br /><br /> </>}
                    {selectValues.isTurkLang && <><LangRadio
                        onClick={() => { 
                            const name1 = 'isTurkLang';
                            const name2 = 'turkLang';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: '' }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: false }));
                         }}
                        langName='Türk dili'
                        name='turkLang'
                        value1='a1turk' value2='a2turk' value3='b1turk' value4='b2turk' value5='c1turk' value6='c2turk'
                        confirm1={selectValues.turkLang === 'a1turk'} confirm2={selectValues.turkLang === 'a2turk'} confirm3={selectValues.turkLang === 'b1turk'}
                        confirm4={selectValues.turkLang === 'b2turk'} confirm5={selectValues.turkLang === 'c1turk'} confirm6={selectValues.turkLang === 'c2turk'}
                        changeHandlerRadio={changeHandlerLang}
                    /><br /><br /><br /></>}
                    {selectValues.isItalyanLang && <LangRadio
                        langName='İtalyan dili'
                        onClick={() => { 
                            const name1 = 'isItalyanLang';
                            const name2 = 'italyanLang';
                            setSelectValues((prevState) => ({ ...prevState, [name2]: '' }));
                            setSelectValues((prevState) => ({ ...prevState, [name1]: false }));
                         }}
                        name='italyanLang'
                        value1='a1italyan' value2='a2italyan' value3='b1italyan' value4='b2italyan' value5='c1italyan' value6='c2italyan'
                        confirm1={selectValues.italyanLang === 'a1italyan'} confirm2={selectValues.italyanLang === 'a2italyan'} confirm3={selectValues.italyanLang === 'b1italyan'}
                        confirm4={selectValues.italyanLang === 'b2italyan'} confirm5={selectValues.italyanLang === 'c1italyan'} confirm6={selectValues.italyanLang === 'c2italyan'}
                        changeHandlerRadio={changeHandlerLang}
                    />}
                </div>

            </div>

            <Button className={classes.buttonBack} onClick={() => navigate(-1)}>Geri</Button>
            <Button type='submit' >Növbəti </Button>

        </Card>
    )
}

export default Stage5;