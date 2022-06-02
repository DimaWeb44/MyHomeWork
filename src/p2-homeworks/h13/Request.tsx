import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import {RequestsAPI} from './RequestsAPI'

function Request() {
    const [checked, setChecked] = useState<boolean>(false)
    const [info, setInfo] = useState<string>('')

    const request = () => {
        RequestsAPI.postChecked(checked)
            .then(response => setInfo(JSON.stringify(response)))
            .catch(function (error) {
                setInfo(JSON.stringify({...error.response.data}))
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <SuperButton onClick={request}>Request</SuperButton>
            <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
            <div>{info}</div>
        </div>
    )
}

export default Request