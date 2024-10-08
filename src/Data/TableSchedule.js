const schedule = [
    {
      Sunday: { time: '10:00 AM - 11:00 AM', color: 'bg-primary' },
      Monday: { time: '11:00 AM - 12:00 PM', color: 'bg-secondary' },
      Tuesday: { time: '12:00 PM - 01:00 PM', color: 'bg-periwinkleblue' },
      Wednesday: { time: '10:00 AM - 11:00 AM', color: 'bg-primary' },
      Thursday: { time: '01:00 PM - 02:00 PM', color: 'bg-skyblue' },
      Friday: { time: '02:00 PM - 03:00 PM', color: 'bg-coralpink' },
    },
    {
      Sunday: { time: '11:00 AM - 12:00 PM', color: 'bg-periwinkleblue' },
      Monday: { time: '12:00 PM - 01:00 PM', color: 'bg-skyblue' },
      Tuesday: { time: '01:00 PM - 02:00 PM', color: 'bg-coralpink' },
      Wednesday: { time: '02:00 PM - 03:00 PM', color: 'bg-secondary' },
      Thursday: { time: '03:00 PM - 04:00 PM', color: 'bg-salmonpink' },
      Friday: { time: '04:00 PM - 05:00 PM', color: 'bg-periwinkleblue' },
    },
    {
      Sunday: { time: '09:00 AM - 10:00 AM', color: 'bg-secondary' },
      Monday: { time: '10:00 AM - 11:00 AM', color: 'bg-primary' },
      Tuesday: { time: '11:00 AM - 12:00 PM', color: 'bg-salmonpink' },
      Wednesday: { time: '12:00 PM - 01:00 PM', color: 'bg-periwinkleblue' },
      Thursday: { time: '01:00 PM - 02:00 PM', color: 'bg-secondary' },
      Friday: { time: '02:00 PM - 03:00 PM', color: 'bg-skyblue' },
    },
    {
      Sunday: { time: '08:00 AM - 09:00 AM', color: 'bg-coralpink' },
      Monday: { time: '09:00 AM - 10:00 AM', color: 'bg-secondary' },
      Tuesday: { time: '10:00 AM - 11:00 AM', color: 'bg-periwinkleblue' },
      Wednesday: { time: '11:00 AM - 12:00 PM', color: 'bg-secondary' },
      Thursday: { time: '12:00 PM - 01:00 PM', color: 'bg-primary' },
      Friday: { time: '01:00 PM - 02:00 PM', color: 'bg-salmonpink' },
    },
    {
      Sunday: { time: '07:00 AM - 08:00 AM', color: 'bg-primary' },
      Monday: { time: '08:00 AM - 09:00 AM', color: 'bg-periwinkleblue' },
      Tuesday: { time: '09:00 AM - 10:00 AM', color: 'bg-primary' },
      Wednesday: { time: '10:00 AM - 11:00 AM', color: 'bg-salmonpink' },
      Thursday: { time: '11:00 AM - 12:00 PM', color: 'bg-coralpink' },
      Friday: { time: '12:00 PM - 01:00 PM', color: 'bg-skyblue' },
    },
    {
      Sunday: { time: '06:00 AM - 07:00 AM', color: 'bg-secondary' },
      Monday: { time: '07:00 AM - 08:00 AM', color: 'bg-skyblue' },
      Tuesday: { time: '08:00 AM - 09:00 AM', color: 'bg-salmonpink' },
      Wednesday: { time: '09:00 AM - 10:00 AM', color: 'bg-skyblue' },
      Thursday: { time: '10:00 AM - 11:00 AM', color: 'bg-secondary' },
      Friday: { time: '11:00 AM - 12:00 PM', color: 'bg-primary' },
    },
  ];
  const scheduleForTeacher = [
    {
    //   Sunday: { time: '10:00 AM - 11:00 AM', color: 'bg-primary' },
      Monday: { time: '11:00 AM - 12:00 PM', color: 'bg-secondary' },
      Tuesday: { time: '12:00 PM - 01:00 PM', color: 'bg-periwinkleblue' },
      Wednesday: { time: '10:00 AM - 11:00 AM', color: 'bg-primary' },
      Thursday: { time: '01:00 PM - 02:00 PM', color: 'bg-skyblue' },
    //   Friday: { time: '02:00 PM - 03:00 PM', color: 'bg-coralpink' },
    },
    {
      Sunday: { time: '11:00 AM - 12:00 PM', color: 'bg-periwinkleblue' },
    //   Monday: { time: '12:00 PM - 01:00 PM', color: 'bg-skyblue' },
      Tuesday: { time: '01:00 PM - 02:00 PM', color: 'bg-coralpink' },
    //   Wednesday: { time: '02:00 PM - 03:00 PM', color: 'bg-secondary' },
    //   Thursday: { time: '03:00 PM - 04:00 PM', color: 'bg-salmonpink' },
      Friday: { time: '04:00 PM - 05:00 PM', color: 'bg-periwinkleblue' },
    },
    {
    //   Sunday: { time: '09:00 AM - 10:00 AM', color: 'bg-secondary' },
      Monday: { time: '10:00 AM - 11:00 AM', color: 'bg-primary' },
      Tuesday: { time: '11:00 AM - 12:00 PM', color: 'bg-salmonpink' },
    //   Wednesday: { time: '12:00 PM - 01:00 PM', color: 'bg-periwinkleblue' },
      Thursday: { time: '01:00 PM - 02:00 PM', color: 'bg-secondary' },
    //   Friday: { time: '02:00 PM - 03:00 PM', color: 'bg-skyblue' },
    },
    {
      Sunday: { time: '08:00 AM - 09:00 AM', color: 'bg-coralpink' },
      Monday: { time: '09:00 AM - 10:00 AM', color: 'bg-secondary' },
      Tuesday: { time: '10:00 AM - 11:00 AM', color: 'bg-periwinkleblue' },
      Wednesday: { time: '11:00 AM - 12:00 PM', color: 'bg-secondary' },
      Thursday: { time: '12:00 PM - 01:00 PM', color: 'bg-primary' },
      Friday: { time: '01:00 PM - 02:00 PM', color: 'bg-salmonpink' },
    },
    {
      Sunday: { time: '07:00 AM - 08:00 AM', color: 'bg-primary' },
      Monday: { time: '08:00 AM - 09:00 AM', color: 'bg-periwinkleblue' },
      Tuesday: { time: '09:00 AM - 10:00 AM', color: 'bg-primary' },
      Wednesday: { time: '10:00 AM - 11:00 AM', color: 'bg-salmonpink' },
      Thursday: { time: '11:00 AM - 12:00 PM', color: 'bg-coralpink' },
      Friday: { time: '12:00 PM - 01:00 PM', color: 'bg-skyblue' },
    },
    {
      Sunday: { time: '06:00 AM - 07:00 AM', color: 'bg-secondary' },
      Monday: { time: '07:00 AM - 08:00 AM', color: 'bg-skyblue' },
      Tuesday: { time: '08:00 AM - 09:00 AM', color: 'bg-salmonpink' },
      Wednesday: { time: '09:00 AM - 10:00 AM', color: 'bg-skyblue' },
      Thursday: { time: '10:00 AM - 11:00 AM', color: 'bg-secondary' },
      Friday: { time: '11:00 AM - 12:00 PM', color: 'bg-primary' },
    },
  ];
export {schedule, scheduleForTeacher}