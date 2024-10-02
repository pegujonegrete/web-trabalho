import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-10">Escola uma das opções</h1>
      <p> <br />
      
      
      </p>
      
      <Link href="/api" className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Ir para Cadastro
      </Link>
      <p> <br />
      
      
      </p>

      <Link href="/api/cadastro" className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Lista de Filmes
      </Link>
      <p> <br />
      
      
      </p>
      
      
    </div>
  );
}
