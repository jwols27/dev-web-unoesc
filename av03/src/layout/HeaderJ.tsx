import { NavLink, useLocation } from 'react-router';
import { useMemo } from 'react';

export default function HeaderJ() {
    const admin = true;
    const location = useLocation();
    const index = useMemo(() => {
        console.log(location.pathname);
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
                            <a href={'#pets'}>Pets</a>
                            <a href={'#sobre'}>Sobre</a>
                            <a href={'#contato'}>Contato</a>
                        </>
                    )}
                    {admin && <NavLink to={'/admin'}>Administrar</NavLink>}
                </div>
            </div>
        </header>
    );
}
