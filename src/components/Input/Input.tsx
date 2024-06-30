import { StyledInput } from './Input.styled';

export type InputType = {
  placeholder: string;
};

export const Input: React.FC<InputType> = props => {
  return <StyledInput placeholder={props.placeholder} />;
};
