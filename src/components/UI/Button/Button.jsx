import "./Button.scss";

function Button({ name, action, color, size }) {
  const handleClick = () => {
    action();
  };
  return (
    <div>
      <button className={`button ${color} ${size}`} onClick={handleClick} type="button">
        {name}
      </button>
    </div>
  );
}

export default Button;
