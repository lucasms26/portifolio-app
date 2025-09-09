import Card from "../components/card/card";
import "./style.css"

const contacts = [
    { nome: 'e-mail', url: 'icons8-gmail-100.png', content: "lucasmartinsdasilva955@gmail.com" },
    { nome: 'Telefone', url: 'icons8-whatsapp-100.png', content: "(19)99441-1270" },
    { nome: 'locate', url: 'icons8-localização-100.png', content: "Campinas, São Paulo" },
];

export default function contact() {
    return (
        <div className="contects-content">
            <h1 className="contact-content-title">Entre em Contato</h1>
            <p className="contact-content-txt">
                Está precisando de um desenvolvedor front-end para transformar ideias em interfaces modernas, rápidas e funcionais?<br />
                Entre em contato comigo!<br /><br />
                Seja para projetos freelancer, parcerias ou oportunidades de trabalho, estou sempre aberto a novas conexões.<br />
                Você pode me chamar por e-mail, telefone ou até pelo WhatsApp.<br /><br />
                Vamos conversar e construir algo incrível juntos?
            </p>
            <div className="div-contacts">
                <a href="https://www.linkedin.com/in/lucas-martins-da-silva-653711217/" target="_blank" rel="noopener noreferrer">
                    <img src="icons8-linkedin-100.png" alt="linkedin" />
                </a>
                <a href="https://github.com/lucasms26" target="_blank" rel="noopener noreferrer">
                    <img src="github.png" alt="github" />
                </a>
            </div>

            <div className="div-contacts">
                {contacts.map((item) => (
                    <div key={item.nome} className="flex flex-col items-center w-40 text-center">
                        <img src={item.url} alt={item.nome} className="w-10 h-10 mb-2" />
                        <span className="text-sm mt-1">{item.content}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}