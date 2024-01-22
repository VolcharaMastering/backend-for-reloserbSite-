import "./Button.scss";

function Button({ name, type, action, color, size }) {
  return (
    <div>
      <button className={`button ${color} ${size}`} onClick={action} type={type}>
        {name}
      </button>
    </div>
  );
}

export default Button;
