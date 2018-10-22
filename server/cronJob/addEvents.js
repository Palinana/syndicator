const axios = require('axios');
const Event = require('../db/models');

const PERSONAL_TOKEN = require('../../token');

const addEvents = () => {
    axios.get('http://localhost:4000/api/events/unposted')
        .then((events) => {
            events.data.map(event => {
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
                              "capacity": event.price
                        }
                }).then(function(res) {
                    console.log(`${event.id} posted!`); 
                    Event.findById(event.id)
                        .then(event => {
                            event.update ({
                                posted: 'true'
                            })
                        }) 
                }).catch(err => console.log(err, err.data));
            })
        })
        .catch(error => console.log(error, req.body))        
}

module.exports = addEvents;
