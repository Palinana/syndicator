const router = require('express').Router();
const Event = require('../db/models');

router.get('/', function(req, res, next) {
    Event.findAll({
        include: [{all: true}]
    })
        .then(events => res.json(events))
        .catch(next);
});

router.get('/unposted', function(req, res, next) {
    Event.findAll({
        where: { 
            posted: 'false' 
        }
    })
        .then(events => res.json(events))
        .catch(next);
});

router.post('/', function (req, res, next) {
    Event.create({ 
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        price: req.body.price,
        capacity: req.body.capacity,
        currency: req.body.currency,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        timeZone: req.body.timeZone,
        invite: req.body.invite,
        value: req.body.value
    })
      .then(event => res.status(201).json(event))  
      .catch(next);
});
  
module.exports = router;