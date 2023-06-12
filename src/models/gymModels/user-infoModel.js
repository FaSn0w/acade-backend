import mongoose from 'mongoose';
import User from './usersModels.js'; // Importar o modelo User

const userInfoSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  height: { type: Number },
  weight: { type: Number },
  age: { type: Number },
  gender: { type: String },
  goal: { type: String },
  experience: { type: String },
  medical_conditions: { type: String },
  allergies: { type: String }
});

const UserInfo = mongoose.model('User_info', userInfoSchema);

export default UserInfo;
