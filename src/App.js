import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import Text from './pages/Text';
import Media from './pages/Media';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
          {/* <Route element={<Dashboard />} /> */}
          <Route path="create" element={<Create />} />
          <Route path="text" element={<Text />} />
          <Route path="media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
