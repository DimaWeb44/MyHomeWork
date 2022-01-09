import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>
            <div className={s.corner}/>
            <div className={s.content}>
                <div className={s.message_name}><span>{props.name}</span></div>
                <div className={s.message_text}>{props.message}</div>
                <div className={s.message_time}><span>{props.time}</span></div>
            </div>
        </div>
    )
}

export default Message
