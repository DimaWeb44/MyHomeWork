import React from 'react'
import {AffairType} from "./HW2";
import {Grid, IconButton} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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
        <Grid container spacing={1} columns={1}>
            <Grid style={{padding: '15px'}}>{props.affair.name}</Grid>
            <Grid style={{padding: '15px'}}
                  color={props.affair.priority === "high" ? "blue" : props.affair.priority === "low" ? "green" : '\n' +
                      'purple'}> {props.affair.priority}</Grid>
            <IconButton onClick={deleteCallback}>
                <HighlightOffIcon/>
            </IconButton>
        </Grid>
    )
}

export default Affair
