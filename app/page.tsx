import Link from "next/link";

const tech = [
  { nome: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { nome: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { nome: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { nome: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { nome: 'TailwindCSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { nome: 'MariaDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' },
  { nome: 'Linux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { nome: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
];

export default function Home() {
  return (
    <div className="content">
      <img src="home.png" alt="home" className="content-img" />
      <div className="content-text">
        <h1 className="content-title">Olá, me chamo Lucas</h1>

        <p className="content-txt">
          Atualmente, atuo como desenvolvedor front-end, criando interfaces modernas, responsivas e funcionais.<br />
          Trabalho com tecnologias como React.js, Next.js, JavaScript, TailwindCSS e Kotlin, além de ter experiência com Python,<br />
          Linux e banco de dados MariaDB. Busco transformar ideias em soluções visuais práticas, com foco na performance, acessibilidade e experiência do usuário.
        </p>
        <a href="Lucas Martins da Silva.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn-cv">Abrir CV</button>
        </a>
        
      </div>
      <div className="div-tech">
        {tech.map((item) => (
          <div key={item.nome} className="flex flex-col items-center w-16">
            <img src={item.url} alt={item.nome} className="icon-tech w-10 h-10" />
            <span className="icon-tech text-sm mt-1 text-center">{item.nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
