import styled from 'styled-components';
import { AutoComplete, DatePicker } from 'antd';

export const BlockTitle = styled.h2`
  font-size: 24px;
  margin: 30px 0 20px 0;
  color: black;
`;

export const Block = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: rgb(243, 243, 243);
  box-shadow: rgba(34, 60, 80, 0.2) 0px 4px 9px 4px;
`;

export const EntryTitle = styled.h3`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 8px;
  color: black;
  width: 100%;
`;

export const StyledInput = styled(AutoComplete)`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledDatePicker = styled(DatePicker)`
  margin-bottom: 20px;
`;
