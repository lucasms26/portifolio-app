import "./style.css";
import { FaGithub } from "react-icons/fa";


export default function About() {
  return (
    <div className="content">
      <img src="about.png" alt="about" className="about-content-img" />
      <div className="about-content-text">
        <h1 className="about-content-title">Sobre Mim</h1>
        <p className="about-content-txt">
          Comecei estudando Design de Games por 2 anos e foi ali que descobri minha paixão por programação.<br />
          Tudo começou de forma simples, editando scripts e mods de jogos, e logo quis entender mais a fundo como o código funcionava.<br />
          Isso me motivou a seguir na área e hoje estou cursando Engenharia de Software na Uninter.<br /><br />

          Desde então, venho me desenvolvendo com projetos próprios e experiências práticas.<br />
          Já trabalhei com suporte técnico, montagem de sistemas, e também desenvolvendo soluções web com HTML, CSS e React,<br />
          além de bots para o Telegram com Python e apps mobile em Kotlin.<br /><br />

          Gosto de aprender coisas novas, me envolver com tecnologia e trabalhar em equipe.<br />
          Estou sempre disposto a ajudar, compartilhar o que sei e crescer junto com os outros.<br />
          Meu foco é evoluir como desenvolvedor e contribuir com projetos que realmente façam a diferença.<br /><br />

          "O maior risco é não correr nenhum risco. Em um mundo que muda muito rapidamente,<br />
          a única estratégia que garante falhar é não correr riscos." <br />
          — Mark Zuckerberg<br /><br />

          Atualmente, estou em busca de oportunidades como desenvolvedor júnior.<br />
          Quero desafios reais, aprender na prática e crescer profissionalmente.
        </p>
      </div>
    </div>
  );
}