import { useState, useContext } from 'react'
import './App.css'
import { Container,Box,Divider } from '@mui/material'
import WeekView from './Components/WeekView'
import AdjustActivities from './Components/AdjustActivities'
import NewActivity from './Components/NewActivity'
import ActivityFull from './Components/ActivityFull'

import FormContext from './Contexts/formContext'

function App() {
    const { activities, setActivities } = useContext(FormContext);
    return (
        <>
           <a href="../Home.html">About</a>
        <Box sx={{ backgroundColor: 'white', margin: '1rem auto', width:'90%', display:'grid', gridTemplateColumns: '3fr 1fr', justifyContent:'flex-start' }}>
            <h1 style={{ fontSize: '70px', backgroundColor: 'pink', borderRadius: '10px', width: '230px', gridColumn:'1/2', color:'black' }}>i-can</h1>
            <Container sx={{ gridColumn:'1/2' }}>
            <NewActivity  />
            </Container>
            <Container sx={{ gridColumn:'1/2' }} >
                <WeekView></WeekView>
                </Container>
                <Box sx={{maxHeight: '90vh', gridColumn:'2/3', gridRow:'1/4', overflow:'scroll'}}>
               
                
                <h1 style={{ textAlign: 'center', color:'black' }}>Backlog</h1>
                <Divider />
                <Box>
                    {activities.map((activity, index) => <ActivityFull key={index} act={activity}></ActivityFull>)}
                    </Box>
           </Box>
            </Box>
        </>

    )
}

export default App
