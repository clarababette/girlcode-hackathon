import React, { useState, useContext } from "react";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    MenuItem,
    Select,
    FormGroup,
    Checkbox,
    Button,
    Slider,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Input,
    InputLabel,
    Card,
    Typography, 
    CardContent
} from '@mui/material';
import { Box } from "@mui/material";
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormContext from "../Contexts/formContext";
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import NaturePeopleRoundedIcon from '@mui/icons-material/NaturePeopleRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import ActivityFull from "./ActivityFull";


const MaterialFormComponent = (props) => {
    const [formData, setData] = useState();
    const { activities, setActivities } = useContext(FormContext);
// let arr = []
    // const [formData, setData] = useState({});
    // const {
    //     activityName,
    //     hours,
    //     minutes,
    //     location,
    //     type,
    //     participants,
    //     scheduled,
    //     cost,
    //     gain } = formData

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
        cost: 7,
        gain: 1
    }


    // const { formData, setData } = useContext(FormContext);
// const sendData = () => {
//     arr.push(formData)
// }

    const handleSubmit = (event) => {
        event.preventDefault();
        setActivities([...activities, formData])
        console.log({ formData });
    };
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const drawerWidth = 240;
    const net = 4;

    if(!activities) return null

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add activity
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a new activity</DialogTitle>
                <DialogContent>
                    <div onSubmit={handleSubmit}>
                        <Box container alignItems="" justify="center" direction="column">
                            <Box item>
                                <FormGroup>
                                    <TextField
                                        id="activityName"
                                        name="activityName"
                                        label="Activity"
                                        type="text"
                                        onChange={({ target }) => setData({ ...formData, activityName: target.value })}
                                    />
                                </FormGroup>
                            </Box>
                            <Box item>
                                <FormControl>
                                    <FormGroup>
                                        <FormLabel>Location</FormLabel>
                                        <RadioGroup
                                            name="location"
                                            onChange={({ target }) => setData({ ...formData, location: target.value })}
                                            row
                                        >
                                            <FormControlLabel
                                                key="Indoor"
                                                value="Indoor"
                                                control={<Radio size="small" />}
                                                label="Indoor"
                                            />
                                            <FormControlLabel
                                                key="Outdoor"
                                                value="Outdoor"
                                                control={<Radio size="small" />}
                                                label="Outdoor"
                                            />

                                        </RadioGroup>
                                    </FormGroup>
                                </FormControl>
                            </Box>
                            <Box item>
                                <FormControl>
                                    <FormGroup>
                                        <FormLabel>Participants</FormLabel>
                                        <RadioGroup
                                            name="participants"
                                            // value={formData.participants}
                                            onChange={({ target }) => setData({ ...formData, participants: target.value })}
                                            row
                                        >
                                            <FormControlLabel
                                                key="Solo"
                                                value="Solo"
                                                control={<Radio size="small" />}
                                                label="Solo"
                                            />
                                            <FormControlLabel
                                                key="1-2"
                                                value="1-2"
                                                control={<Radio size="small" />}
                                                label="1-2"
                                            />
                                            <FormControlLabel
                                                key="3+"
                                                value="3+"
                                                control={<Radio size="small" />}
                                                label="3+"
                                            />
                                        </RadioGroup>
                                    </FormGroup>
                                </FormControl>
                            </Box>
                            <Box item >
                                <FormLabel>Duration</FormLabel>
                                <FormControl style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

                                    <FormGroup>
                                        <Input type="number" style={{ width: '75px' }} min={0} max={24} placeholder='hours' onChange={({ target }) => setData({ ...formData, hours: target.value })}></Input>

                                    </FormGroup>
                                    <FormGroup>

                                        <Input type="number" style={{ width: '75px' }} min={1} max={60} placeholder='minutes' onChange={({ target }) => setData({ ...formData, minutes: target.value })}></Input>

                                    </FormGroup>


                                    {/* <InputLabel>Hours</InputLabel> */}
                                </FormControl>
                            </Box>

                            <Box item >

                                <FormLabel>Activity Type</FormLabel>
                                <FormGroup style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <FormControl style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

                                        <RadioGroup
                                            name="type"
                                            // value={type}
                                            onChange={({ target }) => setData({ ...formData, type: target.value })}
                                            row
                                        >
                                            <FormControlLabel
                                                key="work"
                                                value="work"
                                                control={<Radio size="small" />}
                                                label="Work"
                                            />
                                            <FormControlLabel
                                                key="personal"
                                                value="personal"
                                                control={<Radio size="small" />}
                                                label="Personal"
                                            />

                                        </RadioGroup>
                                    </FormControl>

                                </FormGroup>
                            </Box>
                            <Box item style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <Box>
                                    <FormGroup>
                                        <FormLabel>Energy Cost</FormLabel>
                                        <Slider
                                            size="small"
                                            defaultValue={7}
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                            min={1}
                                            max={7}
                                            onChange={({ target }) => setData({ ...formData, cost: target.value })}
                                        />
                                    </FormGroup>

                                </Box>
                                <Box>
                                    <FormGroup>
                                        <FormLabel>Energy Gain</FormLabel>
                                        <Slider
                                            size="small"
                                            defaultValue={7}
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                            min={1}
                                            max={7}
                                            onChange={({ target }) => setData({ ...formData, gain: target.value })}
                                        />
                                    </FormGroup>

                                </Box>


                            </Box>
                            <Box>
                                <TextField
                                    id="date"
                                    label="Date"
                                    type="date"
                                    defaultValue={new Date()}
                                    sx={{ width: 220 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={({ target }) => setData({ ...formData, scheduled: target.value })}
                                />
                            </Box>

                            <Box item>
                                <Button variant="contained" color="primary" type="submit" onClick={handleClose} style={{
                                    backgroundColor: "red",
                                    margin: "5px"
                                }}>
                                    Cancel
                                </Button>
                                <Button onClick={handleSubmit} variant="contained" color="primary" type="submit" style={{
                                    backgroundColor: "green",
                                    margin: "5px"
                                }}>
                                    Add and save
                                </Button>

                            </Box>
                        </Box>
                    </div>
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Add</Button>
                </DialogActions> */}
            </Dialog>

        </>
    );
}
export default MaterialFormComponent;