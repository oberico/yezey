import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

//mudando a href para link faz com que a apliação não de refresh ao navegar pelas rotas
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">YEZEY</Link>
      </header>

      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />}/>
          <Route path="/" element={<HomeScreen />}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;

// as rotas chamam os arquivos/funções que renderizam as páginas criadas 