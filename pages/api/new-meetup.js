import { MongoClient } from "mongodb";

// POST api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a8g0v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupCollections = db.collection("meetups");

    const result = await meetupCollections.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
