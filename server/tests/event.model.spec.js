const {expect} = require('chai');
const db = require('../db/index');
const Event = db.model('event');

const event  = {
    "id": 1,
    "name": "test_event",
    "description": "test_description_event",
    "address" : "test_address",
    "price" : 50,
    "currency": "CAD",
    "startTime": "2018-11-05T20:00:00Z",
    "endTime": "2018-11-09T20:00:00Z",
    "timeZone": "America/Chicago"
}

describe('Event model', () => {

    beforeEach(() => {
        return db.sync({force: true})
    })

    describe('Schema', function () {

        beforeEach(() => {
            return Event.create({
                id: event.id,
                name: event.name,
                description: event.description,
                address: event.address,
                price: event.price,
                currency: event.currency,
                startTime: event.startTime,
                endTime: event.endTime,
                timeZone: event.timeZone,
            })
        });

        it('requires a "name" to be a string', function () {
        expect(event.name).to.be.a('string')
        })

        it('requires a "description" to be a text', function () {
        expect(event.description).to.be.a('string')
        })

        it('requires a "address" to be a text', function () {
        expect(event.address).to.be.a('string')
        })

        it('requires a "price" to be a number', function () {
        expect(event.price).to.be.a('number')
        })

        it('requires a "currency" to be a string', function () {
        expect(event.currency).to.be.a('string')
        })

        it('requires a "startTime" to be a string', function () {
        expect(event.startTime).to.be.a('string')
        })

        it('requires a "endTime" to be a string', function () {
        expect(event.endTime).to.be.a('string')
        })

        it('requires a "timeZone" to be a string', function () {
        expect(event.timeZone).to.be.a('string')
        })
    }) 
});
