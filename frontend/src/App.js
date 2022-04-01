import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

//mudando a href para link faz com que a apliação não de refresh ao navegar pelas rotas
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="light" variant="light">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>YEZEY</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>Ramon Guimarães - TWM</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

// as rotas chamam os arquivos/funções que renderizam as páginas criadas
