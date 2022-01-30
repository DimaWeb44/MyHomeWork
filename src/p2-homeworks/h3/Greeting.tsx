import React, {ChangeEvent, KeyboardEvent} from 'react'
import {Container, Grid, IconButton, TextField} from "@mui/material";
import {ControlPoint} from "@mui/icons-material";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    onBlur: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress, onBlur} // деструктуризация пропсов
) => {
    return (
        <Container>
            <Grid container spacing={2} style={{padding: '25px'}}>
                <TextField
                    variant="outlined"
                    label={'Type value'}
                    value={name}
                    onChange={setNameCallback}
                    helperText={error}
                    error={!!error}
                    onKeyPress={onKeyPress}
                    onBlur={onBlur}
                />
                <Grid>
                    <IconButton onClick={addUser} color={"primary"} onBlur={onBlur}>
                        <ControlPoint fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid>{totalUsers}</Grid>
            </Grid>
        </Container>
    )
}

export default Greeting
