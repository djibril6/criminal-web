import './BasicInput.scss';

type BasicInputProps = {
  placeholder?: string;
  type?: 'text' | 'tel' | 'email';
};
const BasicInput: React.FC<BasicInputProps> = ({
  type = 'text',
  placeholder = '',
}) => {
  return (
    <div className="basicInputContainer">
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default BasicInput;
