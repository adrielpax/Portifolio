export default function ContactSection() {
  return (
    <div
      className="bg-black/50 backdrop-blur-xl 
      border border-gray-700 rounded-2xl
      px-6 py-8 max-w-md w-[90%]
      hover:border-cyan-500
      transition-all duration-500 ease-in-out
      text-left text-white"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-400 tracking-wide">
        Entre em Contato_
      </h2>

      <p className="text-gray-400 text-base mb-6">
        Entre em contato para colaborar, discutir ideias ou iniciar um projeto.
      </p>

      <a
        href="mailto:adriel.aprendiz@email.com"
        className="inline-block px-5 py-2 rounded-lg text-sm 
        font-semibold text-cyan-400 border border-cyan-400
        hover:bg-cyan-400 hover:text-black
        transition-all duration-300"
      >
        Enviar E-mail
      </a>

      <div className="flex justify-start gap-4 mt-6">
        <a
          href="https://www.linkedin.com/in/adriel-lucas/"
          className="inline-block px-5 py-2 rounded-lg text-sm 
          font-semibold text-cyan-400 border border-cyan-400
          hover:bg-cyan-400 hover:text-black
          transition-all duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/T4SpaX"
          className="inline-block px-5 py-2 rounded-lg text-sm 
          font-semibold text-cyan-400 border border-cyan-400
          hover:bg-cyan-400 hover:text-black
          transition-all duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
