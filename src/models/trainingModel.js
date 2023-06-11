import mongoose from 'mongoose';
import User from './usersModels.js'; // Importar o modelo User

const trainingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Training = mongoose.model('Training', trainingSchema);

export default Training;
