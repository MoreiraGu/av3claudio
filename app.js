const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const pool = require('./db'); // conexão MySQL

const app = express();
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// ================================
//           PÁGINA INICIAL
// ================================
app.get('/', async (req, res) => {
  const [dadosBasicos]   = await pool.query("SELECT * FROM dados_basicos WHERE id = 1");
  const [redesSociais]   = await pool.query("SELECT * FROM redes_sociais WHERE id = 1");
  const [cursos]         = await pool.query("SELECT * FROM cursos");
  const [projetos]       = await pool.query("SELECT * FROM projetos");
  const [competencias]   = await pool.query("SELECT * FROM competencias");

  res.render('index', {
    dadosBasicos: dadosBasicos[0] || {},
    redesSociais: redesSociais[0] || {},
    cursos,
    projetos,
    competencias
  });
});

// ================================
//         GETS GERAIS (API)
// ================================
app.get('/dadosBasicos', async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM dados_basicos WHERE id = 1");
  res.json(rows[0] || {});
});

app.get('/redesSociais', async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM redes_sociais WHERE id = 1");
  res.json(rows[0] || {});
});

app.get('/cursos', async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM cursos");
  res.json(rows);
});

app.get('/projetos', async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM projetos");
  res.json(rows);
});

app.get('/competencias', async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM competencias");
  res.json(rows);
});

// ================================
//    GET por ID (cursos, projetos, competencias)
// ================================
function getById(key, table) {
  app.get(`/${key}/:id`, async (req, res) => {
    const id = req.params.id;
    const [rows] = await pool.query(`SELECT * FROM ${table} WHERE id = ?`, [id]);

    if (!rows.length) {
      return res.status(404).json({ message: "Item não encontrado" });
    }
    res.json(rows[0]);
  });
}

getById("cursos", "cursos");
getById("projetos", "projetos");
getById("competencias", "competencias");

// ================================
//   POST — Atualizar dados únicos
// ================================
app.post('/basicos', async (req, res) => {
  await pool.query(
    "UPDATE dados_basicos SET nome=?, profissao=?, descricao=? WHERE id=1",
    [req.body.nome, req.body.profissao, req.body.descricao]
  );
  res.json({ message: "Dados básicos atualizados" });
});

app.post('/redes', async (req, res) => {
  await pool.query(
    "UPDATE redes_sociais SET github=?, linkedin=?, instagram=? WHERE id=1",
    [req.body.github, req.body.linkedin, req.body.instagram]
  );
  res.json({ message: "Redes sociais atualizadas" });
});

// ================================
//     CRUD COMPLETO (listas)
// ================================
function listaCRUD(key, table) {

  // CREATE
 app.post(`/${key}`, async (req, res) => {

  // Corrigir campos array → virar JSON
  for (let f in req.body) {
    if (Array.isArray(req.body[f])) {
      req.body[f] = JSON.stringify(req.body[f]);
    }
  }

  const fields = Object.keys(req.body).join(",");
  const values = Object.values(req.body);
  const placeholders = values.map(() => "?").join(",");

  const [result] = await pool.query(
    `INSERT INTO ${table} (${fields}) VALUES (${placeholders})`,
    values
  );

  res.status(201).json({ id: result.insertId, ...req.body });
});


  // UPDATE
  app.put(`/${key}/:id`, async (req, res) => {
  const id = req.params.id;

  // Corrigir campos array → virar JSON
  for (let f in req.body) {
    if (Array.isArray(req.body[f])) {
      req.body[f] = JSON.stringify(req.body[f]);
    }
  }

  const fields = Object.keys(req.body).map(f => `${f}=?`).join(",");
  const values = Object.values(req.body);

  await pool.query(
    `UPDATE ${table} SET ${fields} WHERE id=?`,
    [...values, id]
  );

  res.json({ id, ...req.body });
});


  // DELETE
  app.delete(`/${key}/:id`, async (req, res) => {
    const id = req.params.id;
    await pool.query(`DELETE FROM ${table} WHERE id=?`, [id]);
    res.json({ message: "Item deletado", id });
  });
}

// Ativar CRUD para as tabelas
listaCRUD("cursos", "cursos");
listaCRUD("projetos", "projetos");
listaCRUD("competencias", "competencias");

// ================================
//        INICIAR SERVIDOR
// ================================
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
