import express from 'express';
import Participant from '../models/Participant.js';

const router = express.Router();

// Register a new participant
router.post('/register', async (req, res) => {
  try {
    const newParticipant = new Participant(req.body);
    const savedParticipant = await newParticipant.save();
    res.status(201).json(savedParticipant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all participants (for Admin)
router.get('/', async (req, res) => {
  try {
    const participants = await Participant.find().sort({ registrationDate: -1 });
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update participant status (for Admin)
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const participant = await Participant.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(participant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
