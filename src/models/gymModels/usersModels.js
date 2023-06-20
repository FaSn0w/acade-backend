import mongoose from 'mongoose';
import Personal from './personalModel.js'; // Importar o modelo Personal
import Gym from './gymModel.js'; // Importar o modelo Gym

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true, default: "User" },
  active: { type: Boolean, default: true },
  hash: { type: String, required: true },
  personal_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Personal', required: false },
  gym_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Gym' }
});

const User = mongoose.model('User', userSchema);

export default User;
