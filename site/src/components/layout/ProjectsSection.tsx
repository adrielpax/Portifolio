export default function ProjectsSection() {
  return (
    <div
      className="bg-black/50 backdrop-blur-xl rounded-2xl
      px-6 py-8 max-w-md w-[90%] border border-gray-700
      hover:border-cyan-500
      transition-all duration-500 ease-in-out
      text-white text-left"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-400 tracking-wide">
        Projetos_
      </h2>

      <p className="text-gray-400 text-base mb-6">
        Aqui você encontrará meus projetos mais recentes e relevantes.
      </p>

      <div className="space-y-4">
        <div className="flex flex-col gap-2 rounded-lg px-4 py-3 border border-gray-700  transition-all duration-300">
          <h3 className="text-lg font-semibold text-cyan-300">
            App React: YourFinance
          </h3>
          <img
            src="/images/yourfinance.png"
            alt="Precinho-Rei Project"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <p className="text-gray-500 text-sm">
            2020 um dos meus primeiros projetos, um app de finanças pessoais
            desenvolvido em React. Ele permite que os usuários gerenciem suas
            finanças de forma simples e intuitiva. O app inclui funcionalidades
            como controle de despesas, receitas e relatórios financeiros.
            <br />
            <br />
            O projeto foi uma ótima oportunidade para aprender sobre o
            desenvolvimento de aplicações web com React, além de me ajudar a
            entender melhor como funcionam as finanças pessoais.
            <br />
          </p>
          <a
            href="https://yourfinance.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg text-sm 
              font-semibold text-cyan-400 border border-cyan-400
            hover:bg-cyan-400 hover:text-black
              transition-all duration-300"
          >
            Ver Projeto
          </a>
        </div>
        <div className="flex flex-col gap-2 rounded-lg px-4 py-3 border border-gray-700  transition-all duration-300">
          <h3 className="text-lg font-semibold text-cyan-300">
            E-commerce Nextjs: Precinho-Rei
          </h3>
          <img
            src="/images/precinhorei.png"
            alt="Precinho-Rei Project"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <p className="text-gray-500 text-sm">
            um dos projetos que mais dediquei tempo e esforço. É um e-commerce
            desenvolvido com Next.js, TypeScript e Tailwind CSS. O site é
            responsivo e possui uma interface moderna e intuitiva.
            <br />
            <br />
            O projeto foi uma ótima oportunidade para aprender sobre o
            desenvolvimento de aplicações web com Next.js, além de me ajudar a
            entender melhor como funcionam os e-commerces.
            <br />
            <br />O site inclui funcionalidades como carrinho de compras,
            checkout, integração com APIs de pagamento e muito mais.
          </p>
          <a
            href="https://precinhorei.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg text-sm 
              font-semibold text-cyan-400 border border-cyan-400
            hover:bg-cyan-400 hover:text-black
              transition-all duration-300"
          >
            Ver Projeto
          </a>
        </div>
        <div className="flex flex-col gap-2 rounded-lg px-4 py-3 border border-gray-700  transition-all duration-300">
          <h3 className="text-lg font-semibold text-cyan-300">
            Simple - site: Square oden
          </h3>
          <div className="w-full h-32 object-cover rounded-lg mb-2 bg-gray-600" />
          <p className="text-gray-500 text-sm">
            Crie esse site com o intuito de começar um pequeno negocio local com
            serviços de programação marqueting digital.
            <br />
            <br />
            O site é simples, mas tem um design moderno e responsivo, com
            funcionalidades básicas como informações de contato, serviços
            oferecidos e um formulário de contato.
            <br />
            <br />
            O projeto foi uma ótima oportunidade para aprender sobre o
            desenvolvimento de sites com Next.js, além de me ajudar a entender
            melhor como funcionam os sites de negócios locais.
            <br />
            <br/>
          </p>
          <a
            href="https://www.squareoden.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg text-sm 
              font-semibold text-cyan-400 border border-cyan-400
            hover:bg-cyan-400 hover:text-black
              transition-all duration-300"
          >
            Ver Projeto
          </a>
        </div>
        <div className="rounded-lg px-4 py-3 border border-gray-700  transition-all duration-300">
          <h3 className="text-lg font-semibold text-cyan-300">
            Blog API nodeJS: DevsBetim
          </h3>
          <div className="w-full h-32 object-cover rounded-lg mb-2 bg-gray-600" />
          <p className="text-gray-500 text-sm">em breve</p>
        </div>
      </div>
    </div>
  );
}
