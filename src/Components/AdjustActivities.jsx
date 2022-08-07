import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, Typography, Button, DialogContent, ButtonGroup } from '@mui/material';
import ActivityFull from './ActivityFull';

function AdjustActivities({acts}) {
  const [energy, setEnergy] = useState();
  const [cost, setCost] = useState();
  const [gain, setGain] = useState();
  const [change, setChange] = useState()
  const [open, setOpen] = useState(false);

const suggest = [ 
         {
            activityName: "Nail appointment",
            duration: {
                hours: 2,
                minutes: 30
            },
            location: "indoors",
            type: "personal",
            participants: "solo",
            scheduled: "backlog",
            cost: 2,
            gain: 7
        }, 
        {
            activityName: "walk the dog",
            duration: {
                hours: 0,
                minutes: 45
            },
            location: "outdoors",
            type: "personal",
            participants: "solo",
            scheduled: "backlog",
            cost: 3,
            gain: 5
        }, 
         {
            activityName: "Reading",
            duration: {
                hours: 2,
                minutes: 0
            },
            location: "indoors",
            type: "personal",
            participants: "Solo",
            scheduled: "2022-08-10",
            cost: 2,
            gain: 6
        },     
]

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
  if(!acts) return null
  console.log(acts)
  return (
    <>
     <Button variant="outlined" onClick={handleClickOpen}>
                Adjust today's activities
            </Button>
    <Dialog open={open} onClose={handleClose} maxWidth={false}>
      <DialogTitle sx={{color:'black'}}>Adjust today's activities</DialogTitle>
      <DialogContent sx={{color:'black'}}>
         {!change && <Box>
            
            <Typography sx={{ color: 'black' }}>Today's activities</Typography>
            <Box sx={{width:'90vw', display:'flex', flexWrap:'wrap', rowGap:'1rem', gridGap:'1rem'}}>
              { acts.map((activity, index) => <ActivityFull act={activity}></ActivityFull>) }
            </Box>
          <Button variant="contained" color="secondary" onClick={() => setChange('yes')}>Move to backlog or reschedule?</Button>
          </Box>}
          {change == 'yes' && <Box>
            <Typography sx={{ color: 'black' }}>Today's activities</Typography>
            <Box sx={{width:'90vw', display:'flex', flexWrap:'wrap', rowGap:'1rem', gridGap:'1rem'}}>
              { acts.map((activity, index) => <Box><ActivityFull act={activity}></ActivityFull><ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>Move to backlog</Button>
  <Button>Reschedlue</Button>
</ButtonGroup></Box>)}
            </Box>
            <Button variant="contained" color="secondary" onClick={() => setChange('no')}>Save and continue</Button>
              </Box>
              }
              
     {!energy && change=='no' && <Box>
        <Typography sx={{color:'black'}}>How is your energy today?</Typography>
        <Button onClick={() => setEnergy('low')}>Low</Button>
        <Button onClick={() => setEnergy('high')}>High</Button>
        </Box>}
      {energy == 'low' && !cost && !gain && <Box>
        <Typography sx={{color:'black'}}>Which is more important today?</Typography>
        <Button onClick={() => setCost('low')}>Low cost</Button>
        <Button onClick={() => setGain('high')}>High gain</Button>
        </Box>}
      {energy == 'high' && !cost && !gain && <Box>
        <Typography sx={{color:'black'}}>Which is more important today?</Typography>
        <Button onClick={() => setCost('high')}>High cost</Button>
        <Button onClick={() => setGain('low')}>Low gain</Button>
        </Box>}
       {energy && (cost || gain) && <Box>
            <Typography sx={{ color: 'black' }}>Suggested activities for today</Typography>
            <Box sx={{width:'90vw', display:'flex', flexWrap:'wrap', rowGap:'1rem', gridGap:'1rem'}}>
              { suggest.map((activity, index) => <Box><ActivityFull act={activity}></ActivityFull><Button>Add</Button></Box>) }
            </Box>
            <Button variant="contained" color="secondary" onClick={handleClose}>Save and close</Button>
        </Box>}
      </DialogContent>
      </Dialog>
      </>
 )
}

export default AdjustActivities
