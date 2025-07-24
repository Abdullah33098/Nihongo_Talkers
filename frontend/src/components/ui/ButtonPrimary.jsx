const ButtonPrimary = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn-primary"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
