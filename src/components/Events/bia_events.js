const bia_events = {
  August: [
    { name: "Tea Session", description: "Join us for tea.", url: "http://signup.com/tea", date: new Date("2024-08-15T10:00:00") },
    { name: "Python Analytics Workshop", description: "Learn smth.", url: "http://signup.com/workshop", date: new Date("2024-08-20T10:00:00") }
  ],
  September: [
    { name: "Data Analytics with Excel Workshop", description: "Learn smth.", url: "http://signup.com/", date: new Date("2024-09-05T10:00:00") },
    { name: "BIA Picnic", description: "Welcoming event.", url: "http://signup.com/", date: new Date("2024-09-10T10:00:00") },
    { name: "Data Visualisation with Python", description: "Learn smth.", url: "http://signup.com/", date: new Date("2024-09-15T10:00:00") },
    { name: "Pre DAP Workshop", description: "Learn smth.", url: "http://signup.com/", date: new Date("2024-09-20T10:00:00") },
    { name: "Alumni Networking Night", description: "Learn smth.", url: "http://signup.com/", date: new Date("2024-09-25T10:00:00") }
  ],
  October: [
    { name: "Intro to ML/Regresssion", description: "Learn smth.", url: "http://signup.com/workshop", date: new Date("2024-10-10T10:00:00") }
  ],
  November: [
    { name: "Finals Welfare", description: "Welfare package.", url: "http://signup.com/tea", date: new Date("2024-11-05T10:00:00") }
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
