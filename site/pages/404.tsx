import React from 'react';
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="flex bg-[#d6d6d6] flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-lg mb-8">
        Desculpe, a página que você está procurando não existe.
      </p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial
        </Link>
    </div>
  );
};

export default PageNotFound;
