import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  stravaProfile: { type: String }, // Optional or mapped from Strava Auth later
  address: { type: String },
  totalDistance: { type: Number, default: 0 },
  city: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  
  // Strava specific tokens (if they authenticate)
  stravaId: { type: String },
  stravaAccessToken: { type: String },
  stravaRefreshToken: { type: String },
  tokenExpiresAt: { type: Number }
}, { timestamps: true });

export default mongoose.model('Participant', participantSchema);
