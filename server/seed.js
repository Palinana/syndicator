const db = require('../server/db');
const Event = require('../server/db/models');

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  const events = await Promise.all([
    Event.create({name: "Party", description: "Lorem ipsum dolorlum.", address: "22 str", price: 50, currency: "USD", startTime: "2018-11-05T20:00:00.000Z", endTime: "2018-11-06T00:00:00.000Z", timeZone: "America/Chicago", status: "active"  }),
    Event.create({name: "Festival", description: "Mauris vitum s i scelerisque.", address: "45 str", price: 100, currency: "USD", startTime: "2018-11-05T20:00:00.000Z", endTime: "2018-12-06T00:00:00.000Z", timeZone: "America/Chicago", status: "active" }),
    Event.create({name: "Halloween 2018", description: "Mauris vitum s i scelerisque.", address: "66 str", price: 35, currency: "USD", startTime: "2018-12-05T20:00:00.000Z", endTime: "2018-12-06T00:00:00.000Z",timeZone: "America/Chicago", status: "active", posted: "true" }),
  ])
 
  console.log(`seeded successfully`);
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection');
    db.close()
    console.log('db connection closed');
  })

console.log('seeding...');