import { Layout } from 'antd';
const { Header } = Layout;

function HeaderAnt() {
  return (
    <Header
      style={{
        borderRadius: '0 0 30px 30px',
        color: 'white',
        fontSize: 42,
        height: '10vh',
        display: 'Flex',
        alignItems: 'center',
        paddingLeft: 80,
      }}
    >
      {'Create-CV'}
    </Header>
  );
}

export default HeaderAnt;
