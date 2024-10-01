import type { Config } from "tailwindcss";

const config: Config = {
  module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Altere o caminho conforme a estrutura do seu projeto
      './public/index.html',         // Inclua outros arquivos HTML se necessário
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
export default config;
}
