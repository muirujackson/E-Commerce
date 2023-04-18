const app = require('./app.js');
const dotenv = require('dotenv');

//set up config file
dotenv.config({ path: 'back_end/config/config.env' });

app.listen(process.env.PORT, () => {
    console.log(`App learning on port ${process.env.PORT} in the ${process.env.NODE_ENV} mode.`);
})

