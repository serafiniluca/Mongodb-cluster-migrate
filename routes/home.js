const express = require("express");
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

router.get('/', (req, res) => {
    res.render("home");
});

router.post('/dbTransfer', async (req, res) => {
    try {
        let col
        MongoClient.connect(req.body.input_url, async function (err, db) {
            if (err) throw err;
            let data = await db.db(req.body.input_db)
            col = await data.collection(req.body.input_col).find({}).toArray()
            await db.close();
            col.forEach(async app => {
                col = await delete app._id
                await MongoClient.connect(req.body.output_url, async function (err, db) {
                    if (err) throw err;
                    let outDb = await db.db(req.body.output_db)
                    outCol= await outDb.collection(req.body.output_col).insertOne(app, async function (err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        await db.close();
                    });
                });
            });
        });        
    } finally {
        res.redirect("/");
    }

});

module.exports = router;