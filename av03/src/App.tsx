import './styles/id-styles.css';
import './styles/class-styles.css';
import { banners, gatos } from './data/imagens.ts';
import HeaderJ from './layout/HeaderJ.tsx';
import FooterJ from './layout/FooterJ.tsx';

function App() {
    return (
        <>
            <HeaderJ />
            <main>
                <section id="intro" className="banner">
                    <div id="intro-content">
                        <h1>Dê um lar para quem precisa</h1>
                        <p>
                            Conheça pets, tanto pequenos quanto grandes, que
                            precisam de um lugar para morar.
                        </p>
                        <a href={'#pets'} className="button" draggable="false">
                            Saiba mais 🔎
                        </a>
                    </div>
                    <img src={banners.cestaGatos} alt="Ana Florida" />
                </section>
                <section id="pets" className="banner flex-row">
                    <div id="pets-content">
                        <h2>Pets</h2>
                        <p>
                            Nós cuidamos de todos os animais que precisam,
                            sempre procurando uma casa pra eles. Você quer
                            conhecer alguns dos pets que resgatamos?
                        </p>
                        <p>Conheça a Mel, o Tino, o Nagito, e o Café!</p>
                    </div>
                    <div id="pets-show">
                        <div>
                            <img
                                src={gatos.mel}
                                alt="Mel"
                                title="Mel"
                                draggable="false"
                            />
                            <b>Mel</b>
                        </div>
                        <div>
                            <img
                                src={gatos.tinoNagito}
                                alt="Tino e Nagito"
                                title="Tino e Nagito"
                                draggable="false"
                            />
                            <b>Tino e Nagito</b>
                        </div>
                        <div>
                            <img
                                src={gatos.cafe}
                                alt="Café"
                                title="Café"
                                draggable="false"
                            />
                            <b>Café</b>
                        </div>
                    </div>
                </section>
                <section id="sobre" className="banner flex-row">
                    <img
                        src={banners.zero1}
                        alt="ong"
                        title="ONG"
                        draggable="false"
                    />

                    <div id="sobre-content">
                        <h2>Sobre a nossa ONG</h2>
                        <p>
                            A ONG <b>Amigos da Juju</b> foi criada pela nossa
                            fundadora Jujuba <i>"Juju"</i>, nascendo de seu amor
                            incondicional pelos animais e de seu desejo de
                            oferecer uma segunda chance para aqueles que foram
                            abandonados, resgatados, ou que precisam de um lar.
                        </p>
                        <p>
                            Nossa missão não para no resgate dos animais:
                            promovemos a adoção responsável e realizamos ações
                            educativas para conscientizar a sociedade sobre a
                            importância do respeito e proteção aos animais.
                            Graças à ajuda de voluntários, parceiros e doações,
                            conseguimos transformar histórias de sofrimento em
                            finais felizes.
                        </p>
                        <p>
                            Junte-se a nós! Adote um novo amigo, seja voluntário
                            ou faça uma pequena doação. Com a sua ajuda,
                            conseguiremos fazer a diferença na vida de muitos
                            animais!
                        </p>
                    </div>
                </section>
                <section id="contato" className="banner">
                    <div id="contato-info" className="flex-column">
                        <h2>Entre em contato</h2>
                        <p>Estamos abertos de segunda-feira à sexta-feira.</p>
                        <p style={{ marginBottom: '1rem' }}>
                            🕗 Das 08:00 às 11:00 e das 14:00 às 18:00.
                        </p>
                        <p>
                            <b>Nosso endereço:</b>
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            📌 Rua Caramelo 1025 - Reino Doce, Terra de Ooo
                        </p>
                        <p>
                            <b>☎️ Telefone:</b> (49) 0413-0612
                        </p>
                        <div className="grupo-icones">
                            <a draggable="false">
                                <i className="fa-brands fa-square-whatsapp"></i>
                            </a>
                            <a draggable="false">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                            <a draggable="false">
                                <i className="fa-brands fa-square-bluesky"></i>
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/jwols27/dev-web-unoesc"
                                draggable="false"
                            >
                                <i className="fa-brands fa-square-github"></i>
                            </a>
                        </div>
                    </div>
                    <div id="contato-form" className="flex-column">
                        <h3>Fale conosco!</h3>
                        <label htmlFor="nome"></label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Nome completo"
                        />
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Seu e-mail"
                        />
                        <label htmlFor="mensagem"></label>
                        <textarea
                            id="mensagem"
                            placeholder="Mensagem"
                            rows={6}
                        ></textarea>
                        <button id="enviar">Enviar</button>
                    </div>
                </section>
            </main>
            <FooterJ />
        </>
    );
}

export default App;
