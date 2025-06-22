const Button = ({type, content}) => {
  return <button className={`btn ${type === "secondary" ? "btn--secondary" : null}`}>{content}</button>;
}
export default Button