import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.box}>
            <div className={s.tasks}>{props.affair.name}</div>
            <div className={s.priority}>{props.affair.priority}</div>
            <div className={s.buttonsDel}>
                <button onClick={deleteCallback} className={s.buttonDelete}>X</button>
            </div>
        </div>
    )
}

export default Affair
