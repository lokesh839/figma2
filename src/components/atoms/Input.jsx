const Input = ({ type, placeholder, className }) => (
    <input
      type={type}
      placeholder={placeholder}
      className={`border-b-2 p-3 w-full focus:outline-none ${className}`}
    />
  );
  
  export default Input;
  