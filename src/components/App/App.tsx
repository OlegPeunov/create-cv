import Header from '../Header/Header.tsx';
import Content from '../Content.tsx';
import { StyledLayout } from './App.styled';

function App() {
  return (
    <StyledLayout>
      <Header />
      <Content />
    </StyledLayout>
  );
}

export default App;
