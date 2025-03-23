import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import './styles/styles.css';
import './styles/class-styles.css';

import TemplateIndex from './templates/TemplateIndex.tsx';
import TemplateAdmin from './templates/TemplateAdmin.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<App />}>
                <Route index element={<TemplateIndex />} />
                <Route path={'/admin'} element={<TemplateAdmin />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
