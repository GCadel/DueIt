export const TextField = ({
  handleChange,
  value,
  fieldName,
  label,
  placeholder,
  inputType,
  required,
}) => {
  return (
    <div className='textfield'>
      <label htmlFor={fieldName}>
        {label}
        {required ? <span style={{ color: "red" }}>*</span> : ""}
      </label>
      <input
        type={inputType ? inputType : "text"}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
