const Button = ({ children, onClick, disabled }) => {
  return <button disabled={disabled} className="button-39" onClick={onClick}>
    {children}
  </button>;
};

export default Button;
