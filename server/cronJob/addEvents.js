const axios = require('axios');
const Event = require('../db/models');

const PERSONAL_TOKEN = require('../../token').PERSONAL_TOKEN;

const addEvents = () => {
    axios.get('http://localhost:4000/api/events/unposted')
        .then((events) => {
            if(!events.data.length) {
                console.log('Nothing to repost!')
            }
            else {
                events.data.map(event => {
                    // console.log('EVENT ', event)
                    axios.post(`https://www.eventbriteapi.com/v3/events/?token=${PERSONAL_TOKEN}`, {
                            "event": {
                                "name": {
                                    "html": event.name
                                  },
                                  "start": {
                                      "timezone": event.timeZone,
                                      "utc": event.startTime.replace(".000Z", "Z"),
                                  },
                                  "end": {
                                      "timezone": event.timeZone,
                                      "utc": event.endTime.replace(".000Z", "Z"),
                                  },
                                  "currency": event.currency,
                                  "capacity": event.price,
                                  "invite_only": event.invite
                            }
                    })
                    .then(function(res) {
                        return axios.get(`https://www.eventbriteapi.com/v3/users/me/owned_events/?token=${PERSONAL_TOKEN}`)
                    })
                    .then(function(res) {
                        res.data.events.map(event => {
                            let eventId = event.id;
                            axios.post(`https://www.eventbriteapi.com/v3/events/${eventId}/ticket_classes/?token=${PERSONAL_TOKEN}`, {
                                "ticket_class": {
                                    "name": event.name.html,
                                    "description": event.description.text,
                                    "cost": `${event.currency},${event.capacity}00`,
                                    "quantity_total": event.capacity
                                }
                            })
                            .then(resp=>{
                                console.log("Added the price");
                              })  
                            .catch(error=>{
                                console.log(error);
                            });
                        })
                    })
                    .then(function(res) {
                        console.log('Reposted events!'); 
                        Event.findByPk(event.id)
                            .then(event => {
                                event.update ({
                                    posted: 'true'
                                })
                            }) 
                    }).catch(err => console.log(err, err.data));
                })
            }    
        })
        .catch(error => console.log(error));       
}

module.exports = addEvents;

