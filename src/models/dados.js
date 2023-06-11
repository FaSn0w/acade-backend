import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O nome da tarefa é obrigatório"]
  },
  descricao: {
    type: String,
    required: [false]
  },
  concluida: {
    type: Boolean,
    default: false
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

const Tarefas = mongoose.model("Tarefas", tarefaSchema );

export default Tarefas;