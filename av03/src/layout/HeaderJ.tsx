export default function HeaderJ() {
    return (
        <header>
            <div className="flex-row">
                <h1>Amigos da Juju 🐾</h1>
                <div className="flex-row" style={{ gap: '2rem' }}>
                    <a href={'#pets'}>Pets</a>
                    <a href={'#sobre'}>Sobre</a>
                    <a href={'#contato'}>Contato</a>
                </div>
            </div>
        </header>
    );
}
