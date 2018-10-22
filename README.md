# Syndicator

This application is built from create-react-app, PostgreSQL, Express.js and Bootstrap.

## Assumptions
- Users are admins who already logged in
- When new event is added by the admin it automatically posted to websites

### Client Side (React):
- The main page is the admin dashboard, running in port: 3000
- Admin is able to see all events 
- Admin is able to add a new event and later see it on the dashbord
- The form has data validations and doesn't allow to submit without the context

### Server Side (Express):
- Server is running in port: 4000
- Everything added is displayed in http://localhost:4000/api/events
- Can see all unposted events on http://localhost:4000/api/events/unposted
- Cron job is set to 15 sec(for test purposes) interval and get the events from the link above to post them

## Installation:
- Have postgres installed (https://postgresapp.com/)
- Create a database called event-syndicator
- cd client
- npm install
- npm test
- cd ..
- npm install
- npm run seed
- npm run client
- npm run server (http://localhost:4000)
- npm test

![image](https://user-images.githubusercontent.com/26104823/47293572-7ce78500-d5d8-11e8-8929-2ea00389f72d.png)
![image](https://user-images.githubusercontent.com/26104823/47293596-88d34700-d5d8-11e8-8eb4-b5b82c8faf61.png)
![image](https://user-images.githubusercontent.com/26104823/47293599-8b35a100-d5d8-11e8-8da6-af7b1af5d842.png)
