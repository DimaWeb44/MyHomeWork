import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import {Button, Grid} from "@mui/material";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter("all") // need to fix
    const setHigh = () => props.setFilter("high")
    const setMiddle = () => props.setFilter("middle")
    const setLow = () => props.setFilter("low")

    return (
        <Grid>
            <Grid> {mappedAffairs} </Grid>
                <Button color={"inherit"} variant={props.filter === "all" ? "contained" : "outlined"}
                        onClick={setAll}>All</Button>
                <Button variant={props.filter === "high" ? "contained" : "outlined"} color={"primary"}
                        onClick={setHigh}>High</Button>
                <Button variant={props.filter === "middle" ? "contained" : "outlined"} color={"secondary"}
                        onClick={setMiddle}>Middle</Button>
                <Button variant={props.filter === "low" ? "contained" : "outlined"} color={"success"}
                        onClick={setLow}>Low</Button>
        </Grid>

    )
}

export default Affairs
