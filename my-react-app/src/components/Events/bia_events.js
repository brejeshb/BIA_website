const bia_events = {
  August: [
    { name: "Tea Session", 
      description: "Join us for an afternoon where you can meet fellow like-minded data enthusiasts and learn about BIA and what we have in store for you", 
      url: "https://forms.gle/LLAkotGwiGZTX9RM6", 
      date: new Date("2024-08-21T23:59:00") },


    { name: "(Pandas) Python for Analytics Workshop", 
      description: "Master data manipulation with Python and lay the groundwork for our advanced Data Visualization course", 
      url: "https://forms.gle/XqhamkXeGycznDxJ7", 
      date: new Date("2024-08-19T23:59:00") }


  ],
  September: [
    { name: "Data Analytics with Excel Workshop", 
      description: "Learn how to use PowerQuery in the Data Analytics Cycle to process and gain meaningful insights from data", 
      url: "https://forms.gle/R23L1KvNKEESsoiEA", 
      date: new Date("2024-08-26T23:59:00") },


    { name: "BIA Picnic", 
      description: "Welcoming event for new members to get to know one another", 
      url: "", 
      date: new Date("2024-09-10T10:00:00") },


    { name: "Data Visualisation with Python", 
      description: "Gain valuable insights into how to effectively represent and display data using python visualisation libraries", 
      url: "", 
      date: new Date("2024-09-15T10:00:00") },


    { name: "Pre DAP Workshop", 
      description: "Receive guidance on how to brainstorming your DAP project and get a glimpse of what an end-to-end data analytics project entails", 
      url: "", 
      date: new Date("2024-09-20T10:00:00") },

    { name: "Alumni Networking Night", 
      description: "An opportunity to network with and gain career insights from BIA Alumni", 
      url: "", 
      date: new Date("2024-09-25T10:00:00") }


  ],


  October: [
    { name: "Intro to ML/Regresssion", 
      description: "Deep dive into Data Analytics and Machine Learning with the concepts of regression", 
      url: "", 
      date: new Date("2024-10-10T10:00:00") }

  ],
  November: [
    { name: "Finals Welfare", 
      description: "Look forward to our Welfare package that will give you a boost in the exam season", 
      url: "", 
      date: new Date("2024-11-05T10:00:00") }
  ]
};


function getNextBiaEvent(events) {
  const allEvents = [];

  for (const month in events) {
    allEvents.push(...events[month]);
  }

  const now = new Date();
  const upcomingEvents = allEvents.filter(event => event.date > now);

  if (upcomingEvents.length === 0) {
    return null;
  }

  upcomingEvents.sort((a, b) => a.date - b.date);

  return upcomingEvents[0];
}

const next_bia_event = getNextBiaEvent(bia_events);

export { bia_events, next_bia_event };
