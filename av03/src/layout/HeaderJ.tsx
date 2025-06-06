import { NavLink, useLocation } from 'react-router';
import { useMemo } from 'react';

export default function HeaderJ() {
    const admin = true;
    const location = useLocation();
    const index = useMemo(() => {
        return location.pathname === '/';
    }, [location]);

    return (
        <header>
            <div className="flex-row">
                <h1>Amigos da Juju 🐾</h1>
                <div className="flex-row" style={{ gap: '2rem' }}>
                    {!index && <NavLink to={'/'}>Início</NavLink>}
                    {index && (
                        <>
                            <a href={'#missao'}>Missão</a>
                            <a href={'#sobre'}>Sobre</a>
                            <a href={'#contato'}>Contato</a>
                        </>
                    )}
                    <NavLink to={'/pets'}>Pets</NavLink>
                    {admin && <NavLink to={'/admin'}>Administrar</NavLink>}
                </div>
            </div>
        </header>
    );
}
