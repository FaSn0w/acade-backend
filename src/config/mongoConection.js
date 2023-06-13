import mongoose from "mongoose";

const connectionString = "mongodb://127.0.0.1:27017/AcadeDB"
mongoose.connect(connectionString);

//mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

export default db;