import { useState } from 'react';
import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import NaturePeopleRoundedIcon from '@mui/icons-material/NaturePeopleRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';


const dummyActivity = {
        activityName: "Sprint Planning",
  duration: {
    hours: 2,
    minutes: 15
        },
        location: "indoors",
        type: "work",
        participants: "1-2",
        scheduled: "backlog",
        cost: 1,
        gain: 1
    }

function ActivityMini({ act }) {
  const net = act.gain - act.cost
  return (
    <Card variant="outlined" sx={{backgroundColor: net < 0 ? '#e82b7a' : net > 0 ? '#6b88f9' : '#8d6fd7', width:'15rem', padding:'0.5em 0.75em', display:'flex', columnGap:'1em'}}>
        <Typography sx={{ gridColumn: 'span 3' }}>{act.activityName}</Typography>
        <Box sx={{display:'flex', columnGap:'0.5em', alignItems:'center'}}>
          { act.type == 'work' && <BadgeRoundedIcon fontSize={'10'}/>}
          { act.type == 'personal' && <AccountCircleRoundedIcon fontSize={'10'}/>}
          { act.location == 'indoor' && <HomeRoundedIcon fontSize={'10'}/>}
          { act.location == 'outdoor' && <NaturePeopleRoundedIcon fontSize={'10'}/>}
          { act.participants == 'solo' && <PersonRoundedIcon fontSize={'10'}/>}
          { act.participants == '1-2' && <GroupRoundedIcon fontSize={'10'}/>}
          { act.participants == '3+' && <GroupsRoundedIcon fontSize={'10'}/>}
        </Box> 
   </Card>
 )
}

export default ActivityMini