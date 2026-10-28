import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import Acompanhamento from './pages/Acompanhamento.jsx';
import Formatos from './pages/Formatos.jsx';
import ParaQuem from './pages/ParaQuem.jsx';
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';
import NaoEncontrada from './pages/NaoEncontrada.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="acompanhamento" element={<Acompanhamento />} />
        <Route path="formatos" element={<Formatos />} />
        <Route path="para-quem" element={<ParaQuem />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}
