import { database } from '../../firebase';
import { ref, get } from 'firebase/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { path } = req.query;
    try {
      const snapshot = await get(ref(database, path));
      if (snapshot.exists()) {
        res.status(200).json({ data: snapshot.val() });
      } else {
        res.status(404).json({ message: 'No data available' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
