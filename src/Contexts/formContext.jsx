import { createContext, useState, useEffect } from 'react';


const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [activities, setActivities] = useState(dummy);

  const colorsGain = {
  7:'#7183f3',
  6:'#7680ee',
  5:'#7a7dea',
  4:'#7d7be7',
  3:'#8278e2',
  2:'#8476e0',
  1:'#8873dc',
  0:'#8d6fd7',
}

const colorsCost = {
  1:'#a35fc1',
  2:'#9867cc',
  3:'#b254b2',
  4:'#c049a3',
  5:'#d6398d',
  6:'#dd3486',
  7:'#d4578b',
}

// const [formData, setData] = useState({});
//     const {
//         activityName,
//         hours,
//         minutes,
//         location,
//         type,
//         participants,
//         scheduled,
//         cost,
//         gain } = formData

//   useEffect(() => {
//     const getData = async () => {
//         activityName,
//         hours,
//         minutes,
//         location,
//         type,
//         participants,
//         scheduled,
//         cost,
//         gain  = setData({ ...formData, cost: target.value })
        
      
//     }
//     getData()
//     // if(activityName !== ''){
//     //     getData()
//     // }
    
//   }, [activityName, hours, minutes, location, type, participants, scheduled, cost, gain ])

  

  return (
    <FormContext.Provider
      value={{
        activities, setActivities, colorsCost, colorsGain
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;

const dummy = [
    {
            activityName: "boiler plate",
            duration: {
                hours: 0,
                minutes: 30
            },
            location: "indoors",
            type: "work",
            participants: "1-2",
            scheduled: "backlog",
            cost: 5,
            gain: 2
        },
        {
            activityName: "team meeting",
            duration: {
                hours: 2,
                minutes: 0
            },
            location: "indoors",
            type: "work",
            participants: "3+",
            scheduled: "backlog",
            cost: 7,
            gain: 3
        }, 
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
            activityName: "build an app",
            duration: {
                hours: 8,
                minutes: 30
            },
            location: "indoors",
            type: "work",
            participants: "1-2",
            scheduled: "backlog",
            cost: 7,
            gain: 1
        }, 
         {
            activityName: "Spring cleaning",
            duration: {
                hours: 3,
                minutes: 15
            },
            location: "indoors",
            type: "personal",
            participants: "Solo",
            scheduled: "2022-08-10",
            cost: 6,
            gain: 2
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
        {
            activityName: "Project integration",
            duration: {
                hours: 5,
                minutes: 30
            },
            location: "indoors",
            type: "work",
            participants: "3+",
            scheduled: "2022-08-12",
            cost: 7,
            gain: 1
        },
    
]

