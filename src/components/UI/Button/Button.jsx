function Button({ name, type, action, color }) {
  return (
    <div>
      <button
        className={`button ${color}==="light" ? "button__light" : "button__dark"`}
        onClick={action}
        type={type}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
