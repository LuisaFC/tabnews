const dotenv = require("dotenv");
const nextJest = require("next/jest");

//utiliza as variáveis de ambiente de um arquivo específico (.env.development)
dotenv.config({
  path: ".env.development",
});

//Configuração do Next.js - dizendo onde está o projeto.
const createJestConfig = nextJest({
  dir: ".",
});

//Configuração do Jest - passa as regras de teste que você deseja.
const jestConfig = createJestConfig({
  //Define o absolute Import
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
