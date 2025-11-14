-- =============================
--   CRIAR BANCO DE DADOS
-- =============================
CREATE DATABASE portfolio;
USE portfolio;

-- =============================
--   TABELA: dados_basicos
-- =============================
CREATE TABLE dados_basicos (
  id INT PRIMARY KEY DEFAULT 1,
  nomeCompleto VARCHAR(255),
  cargo VARCHAR(255),
  email VARCHAR(255),
  telefone VARCHAR(50),
  localizacao VARCHAR(255),
  biografia TEXT,
  foto_url VARCHAR(255)
);

INSERT INTO dados_basicos VALUES
(1, 'Gustavo Moreira', 'Dev', 'gu.omoreira7@gmail.com', '(12)99150-3513',
 'São José dos Campos, SP',
 'Sou estudante de ADS e apaixonado por Tecnologia',
 '/img/pokemon.jpg');

-- =============================
--   TABELA: redes_sociais
-- =============================
CREATE TABLE redes_sociais (
  id INT PRIMARY KEY DEFAULT 1,
  linkedin_url VARCHAR(255),
  linkedin_username VARCHAR(255),
  github_url VARCHAR(255),
  github_username VARCHAR(255)
);

INSERT INTO redes_sociais VALUES
(1,
 'https://www.linkedin.com/in/gu-moreira',
 'Gustavo Moreira',
 'https://github.com/MoreiraGu',
 'Gustavo Moreira');

-- =============================
--   TABELA: projetos
-- =============================
CREATE TABLE projetos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT,
  tecnologias JSON,
  link VARCHAR(255)
);

INSERT INTO projetos (id, nome, descricao, tecnologias, link) VALUES
(1, 'Portfolio Pessoal',
 'Site para exibir meu portfólio, cursos, projetos e competências.',
 '["HTML","CSS","JavaScript","Node.js","Express","EJS"]',
 'https://github.com/MoreiraGu/Portfolio'),

(2, 'Sistema de Alunos e Cursos',
 'Aplicação para gerenciamento de alunos e cursos em uma instituição.',
 '["Java","MySQL"]',
 'https://github.com/MoreiraGu/Sistema_Alunos_Cursos'),

(3, 'MediControl',
 'Aplicação para controle e gerenciamento de medicações.',
 '["Java","FlatLaf","MySQL","jCalendar"]',
 'https://github.com/MoreiraGu/MediControl');

-- =============================
--   TABELA: cursos
-- =============================
CREATE TABLE cursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(50),
  nome VARCHAR(255),
  instituicao VARCHAR(255),
  periodo VARCHAR(255),
  descricao TEXT,
  tags JSON
);

INSERT INTO cursos VALUES
(1, 'academico',
 'Análise e Desenvolvimento de Sistemas',
 'Fatec Jessen Vidal',
 'Ago/2024 - Jul/2027',
 'Formação sólida em fundamentos de computação, estruturas de dados, algoritmos e desenvolvimento de sistemas.',
 '[]'),

(2, 'complementar',
 'Curso de Inglês',
 'The Family Idiomas',
 'Jan/2020 - Dez/2022',
 'Aprimoramento nas habilidades na língua inglesa, tendo alcançado proficiência nível B2.',
 '["Inglês"]');

-- =============================
--   TABELA: competencias
-- =============================
CREATE TABLE competencias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(50),
  categoria VARCHAR(255),
  nome VARCHAR(255),
  descricao TEXT,
  habilidades JSON,
  icone VARCHAR(100)
);

-- Competências técnicas (com habilidades)
INSERT INTO competencias (id, tipo, categoria, habilidades) VALUES
(1, 'tecnica', 'Front-end',
 '["HTML","CSS","JavaScript","TypeScript","React"]'),

(2, 'tecnica', 'Back-end',
 '["Java","Python"]'),

(3, 'tecnica', 'Dados',
 '["SQL","MySQL"]'),

(4, 'tecnica', 'Versionamento',
 '["Git","GitHub"]'),

(5, 'tec_ferramenta', 'Ferramentas',
 '["VS Code","Thunder Client"]');

-- Competências interpessoais (sem habilidades)
INSERT INTO competencias (id, tipo, nome, descricao, icone) VALUES
(6, 'interpessoal', 'Trabalho em Equipe',
 'Capacidade de colaborar efetivamente em projetos coletivos.',
 'team'),

(7, 'interpessoal', 'Proatividade',
 'Interesse e pré disposição para execução de tarefas',
 'team'),

(8, 'interpessoal', 'Organização',
 'Cuidado e controle contínuo de tarefas e ambiente',
 'team');
