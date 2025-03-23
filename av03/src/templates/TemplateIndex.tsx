import { banners, gatos } from '../data/imagens.ts';
import SectionContato from './SectionContato.tsx';
import '../styles/index-styles.css';

export default function TemplateIndex() {
    return (
        <main id={'main-index'}>
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
                <img src={banners.cestaGatos} alt="Cesta de gatos" />
            </section>
            <section id="pets" className="banner flex-row">
                <div id="pets-content">
                    <h2>Pets</h2>
                    <p>
                        Nós cuidamos de todos os animais que precisam, sempre
                        procurando uma casa pra eles. Você quer conhecer alguns
                        dos pets que resgatamos?
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
                        incondicional pelos animais e de seu desejo de oferecer
                        uma segunda chance para aqueles que foram abandonados,
                        resgatados, ou que precisam de um lar.
                    </p>
                    <p>
                        Nossa missão não para no resgate dos animais: promovemos
                        a adoção responsável e realizamos ações educativas para
                        conscientizar a sociedade sobre a importância do
                        respeito e proteção aos animais. Graças à ajuda de
                        voluntários, parceiros e doações, conseguimos
                        transformar histórias de sofrimento em finais felizes.
                    </p>
                    <p>
                        Junte-se a nós! Adote um novo amigo, seja voluntário ou
                        faça uma pequena doação. Com a sua ajuda, conseguiremos
                        fazer a diferença na vida de muitos animais!
                    </p>
                </div>
            </section>
            <SectionContato />
        </main>
    );
}
