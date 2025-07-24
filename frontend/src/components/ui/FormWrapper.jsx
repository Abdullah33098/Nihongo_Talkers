const FormWrapper = ({ children }) => {
  return (
    <div className="form-wrapper px-4">
      <div className="form-box w-full max-w-[424px]">{children}</div>
    </div>
  );
};

export default FormWrapper;
