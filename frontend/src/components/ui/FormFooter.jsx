const FormFooter = ({ text, linkText, onClick }) => {
  return (
    <p className="form-footer">
      {text}
      <span className="footer-link" onClick={onClick}>
        {linkText}
      </span>
    </p>
  );
};

export default FormFooter;
