import mongoose from 'mongoose';
import Personal from './personalModel'; // Importar o modelo Personal

const groupSchema = new mongoose.Schema({
  group_name: { type: String, required: true },
  personal_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Personal', required: true }
});

const Group = mongoose.model('Group', groupSchema);

export default Group;
