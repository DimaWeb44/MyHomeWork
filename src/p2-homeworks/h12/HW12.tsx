import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some', 'custom'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch()
    // useSelector
    // useDispatch, onChangeCallback
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                value={theme}
                onChangeOption={onChangeCallback}
                options={themes}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
