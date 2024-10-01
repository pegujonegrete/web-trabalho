import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const API_KEY = 'sua_chave_da_api'; // Substitua pela sua chave da API

async function fetchAndStoreMovies() {
  for (let i = 1; i <= 200; i++) {
    try {
      // Aqui você pode alterar a busca para qualquer filme, 
      // isso é apenas um exemplo usando o número de série
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=movie&page=${i}`);
      const movies = response.data.Search;

      if (movies) {
        for (const movie of movies) {
          await prisma.post.create({
            data: {
              titulo: movie.Title,
              ano: movie.Year,
              status: 'Não Assistido', // ou qualquer valor que você desejar
              genero: 'Desconhecido', // Você pode adicionar lógica para obter o gênero
              diretor: movie.Director || 'Desconhecido', // Se o diretor não estiver disponível
            },
          });
          console.log(`Filme ${movie.Title} adicionado com sucesso!`);
        }
      }
    } catch (error) {
      console.error(`Erro ao buscar filmes: ${error.message}`);
    }
  }
}

fetchAndStoreMovies()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
