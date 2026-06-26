import express from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import Admin from '../models/Admin.js';
import Participant from '../models/Participant.js';

const router = express.Router();

// Admin Login
router.post('/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // In production, compare hashed password
    const admin = await Admin.findOne({ username });
    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, username });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Strava Auth Init
router.get('/strava', (req, res) => {
  const redirectUri = process.env.STRAVA_REDIRECT_URI;
  const clientId = process.env.STRAVA_CLIENT_ID;
  const url = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=read,activity:read`;
  res.redirect(url);
});

// Strava Auth Callback
router.get('/strava/callback', async (req, res) => {
  const { code } = req.query;
  try {
    // Exchange code for token
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code'
    });

    const { athlete, access_token, refresh_token, expires_at } = response.data;
    
    // Check if participant already exists by Strava ID or redirect to registration with data
    let participant = await Participant.findOne({ stravaId: athlete.id });
    
    if (participant) {
      participant.stravaAccessToken = access_token;
      participant.stravaRefreshToken = refresh_token;
      participant.tokenExpiresAt = expires_at;
      await participant.save();
    } else {
      // For now, redirect to frontend registration page passing strava tokens/id in URL (or secure cookie)
      // In a real app, use a secure session or temporary JWT token to pass this state.
    }

    res.redirect(`${process.env.FRONTEND_URL}/register?stravaId=${athlete.id}&token=${access_token}&refresh=${refresh_token}`);
  } catch (error) {
    console.error('Strava OAuth Error:', error.message);
    res.redirect(`${process.env.FRONTEND_URL}/register?error=strava_auth_failed`);
  }
});

export default router;
