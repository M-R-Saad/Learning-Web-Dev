const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
})

app.listen(port, () => {
  console.log(`Crud server running on port ${port}`);
})

// user : crud-user
// pass: ioObEUnURyXifMBZ

const uri = "mongodb+srv://crud-user:ioObEUnURyXifMBZ@cluster0.jc1nar9.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const database = client.db("crudDB");
    const usersCollection = database.collection("users");

    app.get('/users', async (req, res) => {
        const cursor = usersCollection.find();
        const users = await cursor.toArray();
        res.send(users);
    });

    app.post('/users', async (req, res) => {
        console.log(req.body);
        const user = req.body;
        const result = await usersCollection.insertOne(user);
        res.send(result);
    });

    app.delete('/users/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await usersCollection.deleteOne(query);
        res.send(result);
    });
  } 
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


