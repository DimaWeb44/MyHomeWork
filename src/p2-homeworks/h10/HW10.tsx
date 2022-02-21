import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {CircularProgress} from "@mui/material";

function HW10() {
    // useDispatch
    const dispatch = useDispatch()
    // useSelector
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)


    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    }

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><CircularProgress color="success"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
