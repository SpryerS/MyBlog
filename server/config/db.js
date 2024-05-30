/* Import Mongoose */
const mongoose = require('mongoose');

/* Define connectDB function */
const connectDB = async () => {
    try {
        /* Set mongoose option */
        mongoose.set('strictQuery', false);
        /* Connect to MongoDB using environment variable */
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        /* Log successful connection */
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        /* Log any errors */
        console.log(error);
    }
}

/* Export connectDB function */
module.exports = connectDB;