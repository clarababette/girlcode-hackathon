import { useState,useContext } from 'react';
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
import FormContext from '../Contexts/formContext';
// import dummyData from '../dummyData'



// const dummyActivity = {
//         activityName: "Sprint Planning",
//   duration: {
//     hours: 2,
//     minutes: 15
//         },
//         location: "indoors",
//         type: "work",
//         participants: "1-2",
//         scheduled: "backlog",
//         cost: 1,
//         gain: 1
//     }

function ActivityFull({ act }) {
  const net = act.gain - act.cost
  const { colorsGain, colorsCost } = useContext(FormContext)

  console.log(act)

  return (
    <Card variant="outlined" sx={{backgroundColor: net < 0 ? colorsCost[net*-1] : colorsGain[net], width:'18rem'}}>
      <CardContent sx={{display:'grid', gridTemplateColumns: '1fr 1fr', alignContent:'center', alignItems:'center'}}>
        <Typography sx={{gridColumn:'span 2'}}>{act.activityName}</Typography>
          { act.type == 'work' && <Box> 
          <BadgeRoundedIcon/>
          <Typography>work</Typography>
        </Box>}
          { act.type == 'personal' && <Box> 
          <AccountCircleRoundedIcon/>
          <Typography>work</Typography>
          </Box>}
          <Box>
          <AccessTimeRoundedIcon/>
          <Typography>{`${act.duration?.hours && `${act.duration.hours}h`}${act.duration?.minutes && ` ${act.duration.minutes}m`}`}</Typography>
        </Box>
          { act.location == 'indoors' && <Box> 
          <HomeRoundedIcon/>
          <Typography>indoor</Typography>
        </Box>}
          { act.location == 'outdoors' && <Box> 
          <NaturePeopleRoundedIcon/>
          <Typography>outdoor</Typography>
        </Box>}
          { act.participants == 'Solo' || act.participants == 'solo' && <Box> 
          <PersonRoundedIcon/>
          <Typography>solo</Typography>
        </Box>}
          { act.participants == '1-2' && <Box> 
          <GroupRoundedIcon/>
          <Typography>1-2</Typography>
        </Box>}
          { act.participants == '3+' && <Box> 
          <GroupsRoundedIcon/>
          <Typography>3+</Typography>
        </Box>}
        <Box sx={{ gridColumn: 'span 2' }}>
          <Typography>energy</Typography>
          <Typography>
            cost:
         { [...new Array(act.cost)].map((e, i) => <BoltRoundedIcon key={i} sx={{ fontSize: 20 }}/>)}
          </Typography>
          <Typography>
            gain:
            {[...new Array(act.gain)].map((e, i) => <BoltRoundedIcon key={i} sx={{ fontSize: 20 }}/>)}
          </Typography>
        </Box>        
      </CardContent>
   </Card>
 )
}

export default ActivityFull