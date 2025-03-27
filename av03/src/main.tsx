import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import './styles/styles.css';
import './styles/class-styles.css';
import { TemplateAdmin, TemplateIndex, TemplatePets } from './templates';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<App />}>
                <Route index element={<TemplateIndex />} />
                <Route path={'/admin'} element={<TemplateAdmin />} />
                <Route path={'/pets'} element={<TemplatePets />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
