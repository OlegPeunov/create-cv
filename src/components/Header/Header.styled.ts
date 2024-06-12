import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;

export const StyledHeader = styled(Header)`
  border-radius: 0 0 15px 15px;
  color: white;
  font-size: 42px;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 80;
`;
