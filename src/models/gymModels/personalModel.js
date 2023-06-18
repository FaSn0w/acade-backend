import mongoose from 'mongoose';
import Gym from './gymModel.js'; // Importar o modelo Gym

const personalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true, default: "Personal" },
  active: { type: Boolean, default: true },
  hash: { type: String, required: true },
  gym_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Gym', required: true }
});

const Personal = mongoose.model('Personal', personalSchema);

export default Personal;

