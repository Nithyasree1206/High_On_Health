import express from 'express';
import Participant from '../models/Participant.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const totalParticipants = await Participant.countDocuments({ status: 'approved' });
    
    // Aggregate total distance
    const distanceResult = await Participant.aggregate([
      { $match: { status: 'approved' } },
      { $group: { _id: null, total: { $sum: '$totalDistance' } } }
    ]);
    const totalDistance = distanceResult.length > 0 ? distanceResult[0].total : 0;
    
    // Unique cities
    const cities = await Participant.distinct('city', { status: 'approved' });
    const participatingCities = cities.length;

    res.json({
      totalParticipants,
      totalDistance,
      participatingCities,
      goalDistance: 42000
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
