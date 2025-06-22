const Button = ({ type, content, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${type === "secondary" ? "btn--secondary" : null}`}>
      {content}
    </button>
  );
};
export default Button;
