import mongoose from 'mongoose';
import Group from './groupModel.js'; // Importar o modelo Group
import Gym from './gymModel.js'; // Importar o modelo Gym

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  active: { type: Boolean, default: true },
  hash: { type: String, required: true },
  group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  gym_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Gym' }
});

const User = mongoose.model('User', userSchema);

export default User;
