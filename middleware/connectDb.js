const mongoose = require("mongoose");

module.exports=(req,res,next)=>{
    const MongoURL= req.body.input_url;
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

    next();
}