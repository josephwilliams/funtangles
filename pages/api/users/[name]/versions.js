import clientPromise from '../../../../lib/mongodb';

export default async (req, res) => {
  const versionTitle = req.body.title
  const version = req.body.version

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_NAME);

    const users = await db
      .collection('users')
      .find({ name: req.query.name })
      .toArray();
    const user = users[0]
    const prevVersions = user?.versions

    db.collection('users').updateOne({ name: req.query.name },
      {
       $set: {
         versions: {
           ...prevVersions,
          [versionTitle]: version
        }
      }
    })

    res.json({ success: true });
  } catch (e) {
     console.error(e);
  }
};
