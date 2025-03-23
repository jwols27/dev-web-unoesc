import { EmailForm } from '../components/EmailForm.tsx';

export default function SectionContato() {
    return (
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
            <EmailForm />
        </section>
    );
}
