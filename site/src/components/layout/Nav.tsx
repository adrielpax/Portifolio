import Link from 'next/link';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
// import React, { useState } from 'react';

interface NavLink {
    label: string;
    href: string;
}

const Nav: React.FC = () => {
    // const [isOpen, setIsOpen] = useState(false);

    const navLinks: NavLink[] = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    return (<nav>
      <div className='px-3 py-4'>

        {/* Header simples */}
          <header className="w-full text-center py-8 max-w-[875px] mx-auto bg-white/5 backdrop-blur-sm rounded-lg px-4
           border border-white/10 flex flex-row items-center justify-between gap-4">
          
          <div className="text-center px-4">

            <span className="text-cyan-500 flex items-center justify-start text-xs mt-0 p-0">Adriel Lucas | Portifolio Pessoal</span>
            <h1 className="flex items-center justify-start mt-0 p-0 text-lg">Analista de Sistemas Web</h1>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1 hover:bg-white/20 transition-colors"> <AiFillHome className="w-4 h-4" /> Início </Link>
            <Link href="/about" className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1 hover:bg-white/20 transition-colors">Sobre</Link>
            <Link href="/blog" className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1 hover:bg-white/20 transition-colors">Blog</Link>
            <Link href="/projects" className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1 hover:bg-white/20 transition-colors">Projetos</Link>
          </div>
          </header>
      </div>
    </nav>
        
    );
};

export default Nav;