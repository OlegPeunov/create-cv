import { StyledInput } from './Input.styled';
import { InputProps } from 'antd';

export const Input: React.FC<InputProps> = props => {
  return (
    <StyledInput placeholder={props.placeholder} onChange={props.onChange} />
  );
};
