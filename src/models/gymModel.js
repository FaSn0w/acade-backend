// Importa Mongoose
import mongoose from "mongoose";

// Definir o esquema do modelo
const gymSchema = new mongoose.Schema({  
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  active: { type: Boolean, default: true }
});

// Criar o modelo com o esquema definido
const Gym = mongoose.model('Gym', gymSchema);

// Exportar o modelo para uso em outros arquivos
export default Gym;
