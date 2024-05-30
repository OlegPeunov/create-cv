import FormPersonalInfo from '../Blocks/PersonalInfo/PersonalInfo.tsx';
import Header from '../Header/Header.tsx';
import * as S from './App.styled';

function App() {
  return (
    <S.StyledLayout>
      <Header />
      <FormPersonalInfo />
    </S.StyledLayout>
  );
}

export default App;
