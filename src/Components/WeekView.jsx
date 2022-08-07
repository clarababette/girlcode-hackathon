import { useEffect, useState, useContext } from 'react'
import moment from 'moment'
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ActivityFull from './ActivityFull';
import ActivityMini from './ActivityMini';
import FormContext from '../Contexts/formContext';
import AdjustActivities from './AdjustActivities'

function WeekView() {
const [week, setWeek] = useState(0)
const [dates, setDates] = useState()
const {activities} = useContext(FormContext)  

 function formatDate(date) {
    return moment(date).format('dddd DD MMMM YYYY');
  }

const getWeek = (week) => {
    let startDate = moment();
    if (week < 0) {
      week = week * -1;
      startDate = startDate.subtract(week, 'weeks');
    } else if (week > 0) {
      startDate = startDate.add(week, 'weeks');
    }

    let theseDates = [];
    let i = 0;
    while (i < 7) {
      let day = moment(startDate).add(i, 'days').format('YYYY-MM-DD');
       theseDates = [...theseDates, day]
      i++;
    }

    return theseDates;
}

  useEffect(() => {
    setDates([...getWeek(week)])
  }, [week])
  

    function getStartAndEnd(week) {
    let startDate = moment();
    if (week < 0) {
      week = week * -1;
      startDate = startDate.subtract(week, 'weeks');
    } else if (week > 0) {
      startDate = startDate.add(week, 'weeks');
    }
    return `${startDate.format('dddd DD MMMM YYYY')} - ${startDate
      .add(7, 'days')
      .format('dddd DD MMMM YYYY')}`;
  }

  if (!dates || !activities) return null;
  
const dummyActivity = {
        activityName: "Sprint Planning",
  duration: {
    hours: 2,
    minutes: 15
        },
        location: "outdoor",
        type: "work",
        participants: "1-2",
        scheduled: "backlog",
        cost: 7,
        gain: 1
    } 



  return (
    <Box sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', alignContent:'center'}}>
      <Box>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <IconButton aria-label="arrowLeft" onClick={() => setWeek(week - 1)} sx={{marginRight:'1em'}}>
        <ArrowLeftRoundedIcon />
      </IconButton>
      {getStartAndEnd(week)}
         <IconButton aria-label="arrowRight" onClick={() => setWeek(week + 1)} sx={{marginLeft:'1em'}}>
        <ArrowRightRoundedIcon />
      </IconButton >
    </Typography>
      </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', rowGap: '1rem', columnGap: '1rem' }}>
{ dates.map((day,index) =>
  <Card key={day} sx={ index == 0 ? {minWidth: 275, gridColumn:'span 3'} : { minWidth: 275 }}>
  <CardContent >
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {formatDate(day)}
      </Typography>
      <Box sx={ index == 0 ? {display:'flex', flexWrap:'wrap',rowGap: '1rem', columnGap: '1rem'} : {display:'flex', flexDirection:'column', rowGap: '1rem', columnGap: '1rem' }}>
        { index == 0 &&  <AdjustActivities acts={activities}></AdjustActivities>}
        { index == 0 && activities.map((activity, index) => <ActivityFull act={activity}></ActivityFull>) }
        { index != 0 &&  activities.map((activity, index) => <ActivityMini act={activity}></ActivityMini>) }
      </Box>
  </CardContent>
  </Card>
)
}
      </Box>
      </Box>
 )
}

export default WeekView