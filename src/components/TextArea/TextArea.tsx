import { StyledTextArea } from './TextArea.styled';

export const TextArea: React.FC = () => {
  return <StyledTextArea autoSize={{ minRows: 5, maxRows: 7 }} />;
};
