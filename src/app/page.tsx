import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-5">! Filmes !</h1>
      
      <Link href="/api" className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Ir para Cadastro
      </Link>

      <Link href="/api/cadastro" className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Lista de Filmes
      </Link>
      
      <p className="text-lg mt-5">Obrigado pela escolha!</p>
    </div>
  );
}
