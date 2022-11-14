import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  try {
   const client = await clientPromise;
   const db = client.db(process.env.MONGODB_NAME);

   if (req.method === 'POST') {
     const user = { name: req.query.name, versions: [] }
     const users = await db
       .collection('users')
       .insertOne(user)
     res.json(user)

   } else {
     // GET
     const users = await db
       .collection('users')
       .find({})
       .toArray();
     res.json(users);
   }
  } catch (e) {
     console.error(e);
  }
};
