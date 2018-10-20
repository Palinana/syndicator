const db = require('../server/db');
const Event = require('../server/db/models');

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  const events = await Promise.all([
    Event.create({name: "Party", description: "Lorem ipsum dolorlum.", address: "22 str", price: 50, startTime: "2018-06-05T20:00:00.000Z", endTime: "2018-12-06T00:00:00.000Z", status: "active"  }),
    Event.create({name: "Festival", description: "Mauris vitum s i scelerisque.", address: "45 str", price: 100, startTime: "2018-06-05T20:00:00.000Z", endTime: "2018-12-06T00:00:00.000Z", status: "active" }),
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