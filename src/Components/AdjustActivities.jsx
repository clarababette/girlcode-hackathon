import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, Typography, Button, DialogContent } from '@mui/material';

function AdjustActivities() {
  const [energy, setEnergy] = useState();
  const [cost, setCost] = useState();
  const [gain, setGain] = useState();
  return (
    <Dialog onClose={'handleClose'} open={true}>
      <DialogTitle>Adjust today's activities</DialogTitle>
      <DialogContent>
        <Box>
          <Typography>Today's activities</Typography>
          <Typography>Move to backlog or reschedule?</Typography>
        </Box>
     {!energy && <Box>
        <Typography>How is your energy today?</Typography>
        <Button onClick={() => setEnergy('low')}>Low</Button>
        <Button onClick={() => setEnergy('high')}>High</Button>
        </Box>}
      {energy == 'low' && <Box>
        <Typography>Which is more important today?</Typography>
        <Button onClick={() => setCost('low')}>Low cost</Button>
        <Button onClick={() => setGain('high')}>High gain</Button>
        </Box>}
      {energy == 'high' && <Box>
        <Typography>Which is more important today?</Typography>
        <Button onClick={() => setCost('high')}>High cost</Button>
        <Button onClick={() => setGain('low')}>Low gain</Button>
        </Box>}
        <Box>
          <Typography>Suggested activities for today</Typography>
        </Box>
      </DialogContent>
    </Dialog>
 )
}

export default AdjustActivities
