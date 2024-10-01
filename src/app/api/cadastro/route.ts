import { prisma } from '../../../prisma/prisma'; 

export async function GET() {
    try {
        const filmes = await prisma.postfilme.findMany(); 
        return new Response(JSON.stringify(filmes), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error('Erro ao obter filmes:', error);
        return new Response(JSON.stringify({ error: "Erro ao obter filmes." }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}

export async function POST(request: Request) {
    try {
        const Filme = await request.json();
        
      
        if (!Filme.titulo || !Filme.ano || !Filme.status || !Filme.genero || !Filme.diretor) {
            return new Response(JSON.stringify({ error: "Todos os campos são obrigatórios." }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const NovoFilme = await prisma.postfilme.create({ 
            data: {
                titulo: Filme.titulo,
                ano: Filme.ano,
                status: Filme.status,
                genero: Filme.genero,
                diretor: Filme.diretor
            }
        });

        return new Response(JSON.stringify(NovoFilme), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error('Erro ao cadastrar o filme:', error);

        return new Response(JSON.stringify({ error: "Erro ao cadastrar o filme." }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
