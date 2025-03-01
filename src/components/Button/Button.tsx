import { StyledButton } from './Button.styled';

export type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <StyledButton type="primary" onClick={onClick}>
      {text}
    </StyledButton>
  );
};
