import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'


export type InitialPeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople: InitialPeopleType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<InitialPeopleType[]>(initialPeople) // need to fix any
    const [but, setBut] = useState('')
    // need to fix any
    const finalPeople = people.map((p: InitialPeopleType) => (
        <div key={p._id} className={s.item}>
            <span>{p.name}</span>
            {p.age}
        </div>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
        setBut('up')
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
        setBut('down')
    }
    const check = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
        setBut('check')
    }
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}
            <div className={s.buttons}>
                <div><SuperButton className={but === 'up' ? s.active : ''} onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton className={but === 'down' ? s.active : ''} onClick={sortDown}>sort down</SuperButton>
                </div>
                <div><SuperButton className={but === 'check' ? s.active : ''} onClick={check}>check 18</SuperButton>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
