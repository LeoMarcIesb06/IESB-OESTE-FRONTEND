// src/App.tsx
import { Container } from './componentes/Container/Container';
import { Heading } from './componentes/Heading/Heading';
import './styles/themes.css';
import './styles/global.css';

export function App() {
  return (
    <>
      {/* Seção 1: Logo */}
      <Container>
        <Heading>Logo</Heading>
      </Container>

      {/* Seção 2: Menu */}
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
