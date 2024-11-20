import conectarAoBanco from "../config/dbconfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // conecta ao databases

export async function getAllPosts() {
    const db = conexao.db('imersao-instabytes');
    const colecao = db.collection('posts');
    return colecao.find().toArray();
};