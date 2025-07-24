const InputField = ({
  icon,
  placeholder,
  type = "text",
  rightIcon,
  onRightIconClick,
}) => {
  return (
    <div className="field-wrapper mb-2">
      {icon && <img src={icon} alt="icon" className="icon-left" />}
      <input
        type={type}
        placeholder={placeholder}
        className="form-input pr-[50px]"
      />
      {rightIcon && (
        <img
          src={rightIcon}
          alt="right icon"
          className="icon-right"
          onClick={onRightIconClick}
        />
      )}
    </div>
  );
};

export default InputField;
