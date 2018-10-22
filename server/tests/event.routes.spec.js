const {expect} = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Event = db.model('event');

const event  = {
    "id": 1,
    "name": "test_party_for_post",
    "description": "test_description_event_routes",
    "address" : "test_address_routes",
    "price" : 100,
    "currency": "GBN",
    "startTime": "2018-11-05T20:00:00Z",
    "endTime": "2018-12-09T20:00:00Z",
    "timeZone": "Pacific/Honolulu"
}

describe('Event routes', () => {

    before(() => {
        return db.sync({force: true})
    })

    describe('Routes', function () {
        describe('POST /api/events', () => {
            it('creates the event and responds with 201', () => {
                return request(app)
                    .post('/api/events')
                    .send({ 
                        name: 'test_party_for_post',
                        description: 'test_description_event_routes',
                        address : 'test_address_routes',
                        price : 20,
                        currency: 'GBN',
                        startTime: '2018-11-05T20:00:00Z',
                        endTime: '2018-12-09T20:00:00Z',
                        timeZone: 'Pacific/Honolulu'
                    })
                    .expect(201)
                    .then(function () {
                        return Event.findOne({
                          where: {
                            name: 'test_party_for_post',
                            description: 'test_description_event_routes',
                            address : 'test_address_routes',
                            price : 20,
                            currency: 'GBN',
                            startTime: '2018-11-05T20:00:00Z',
                            endTime: '2018-12-09T20:00:00Z',
                            timeZone: 'Pacific/Honolulu'
                        }
                        });
                    })
                    .then(function (foundArticle) {
                        expect(foundArticle).to.exist; 
                        expect(foundArticle.name).to.equal('test_party_for_post');
                    });    
            });
        })

        describe('GET /api/events', () => {
            it('responds with 200 and all events in the database', () => {
                return request(app)
                    .get('/api/events')
                    .expect(200)
                    .then(res => {
                        expect(res.body).to.be.an('array')
                        expect(res.body[0].name).to.be.equal(event.name)
                        expect(res.body[0].description).to.be.equal(event.description)
                    })
            });
        })

        describe('GET /api/events/unposted', () => {
            it('responds with 200 and all events that unposted', () => {
                return request(app)
                    .get('/api/events/unposted')
                    .expect(200)
                    .then(res => {
                        expect(res.body).to.be.an('array')
                        expect(res.body[0].name).to.be.equal(event.name)
                        expect(res.body[0].description).to.be.equal(event.description)
                        expect(res.body[0].posted).to.be.equal(false)
                    })
            });
        })
    }) 
});
