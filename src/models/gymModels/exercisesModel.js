import mongoose from 'mongoose';
import Training from './trainingModel.js'; // Importar o modelo Training

const exerciseSchema = new mongoose.Schema({
  training_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Training', required: true },
  exercise: { type: String, required: true },
  group: { type: String },
  series: { type: Number },
  repetitions: { type: Number },
  weight: { type: Number },
  link: { type: String }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
