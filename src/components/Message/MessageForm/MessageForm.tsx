/* eslint-disable no-unused-vars */
import { SubmitButton } from '../../UIElements/Button/SubmitButton';
import { FormInput, FormInputLayout } from './MessageForm.style';
interface MessageFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SyntheticEvent) => void;
  value: string;
}

const MessageForm = ({ onChange, onSubmit, value }: MessageFormProps) => {
  return (
    <FormInputLayout onSubmit={onSubmit}>
      <FormInput onChange={onChange} value={value} placeholder={'Send Message'} type="text" required />
      <SubmitButton>Send</SubmitButton>
    </FormInputLayout>
  );
};

export default MessageForm;
