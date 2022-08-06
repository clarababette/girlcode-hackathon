import { useState } from 'react'
import './App.css'
import { Container } from '@mui/material'
import WeekView from './Components/WeekView'
import AdjustActivities from './Components/AdjustActivities'

function App() {
  return (
    <Container sx={{ backgroundColor: 'white', margin: '1rem auto' }}>
      <AdjustActivities></AdjustActivities>
      <WeekView></WeekView>
    </Container>
 )
}

export default App
