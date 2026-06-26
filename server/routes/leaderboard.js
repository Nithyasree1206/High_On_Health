import express from 'express';
import Participant from '../models/Participant.js';

const router = express.Router();

// Get Top 10 Participants
router.get('/', async (req, res) => {
  try {
    const topParticipants = await Participant.find({ status: 'approved' })
      .sort({ totalDistance: -1 })
      .limit(10)
      .select('name city totalDistance');
    res.json(topParticipants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Sync latest distances from Strava (Mock implementation for now)
router.post('/sync', async (req, res) => {
  // Real implementation would iterate over approved users, fetch Strava activities using access tokens, 
  // calculate total distance, and update DB.
  res.json({ message: 'Strava sync triggered successfully' });
});

export default router;
