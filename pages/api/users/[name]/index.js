import clientPromise from '../../../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_NAME);

    const users = await db
      .collection('users')
      .find({ name: req.query.name })
      .toArray();

    res.json(users[0]);
  } catch (e) {
     console.error(e);
  }
};
