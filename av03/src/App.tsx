import { Outlet } from 'react-router';
import HeaderJ from './layout/HeaderJ.tsx';
import FooterJ from './layout/FooterJ.tsx';

function App() {
    return (
        <>
            <HeaderJ />
            <Outlet />
            <FooterJ />
        </>
    );
}

export default App;
