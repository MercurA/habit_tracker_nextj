// pages/api/writeData.js
import { database } from '../../firebase';
import { ref, set } from 'firebase/database';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { path, data } = req.body;
    try {
      await set(ref(database, path), data);
      res.status(200).json({ message: 'Data written successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
