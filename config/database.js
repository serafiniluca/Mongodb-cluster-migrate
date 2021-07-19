const mongoose =require("mongoose");
const { DB_USERNAME, DB_PASSWORD,DB_CLUSTER,DB_NAME} =require("./config");

const MongoURL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(MongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log("Database connection established");
    } catch (error) {
        console.log("Something went wrong with Database connection");
        process.exit(1);
    }
};

module.exports = {
    connectDB,
    MongoURL
}
