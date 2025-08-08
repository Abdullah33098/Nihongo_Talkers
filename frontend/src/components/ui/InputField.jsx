import React from 'react';

export const Input = ({
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
  onBlur,
  icon,
  className = '',
  error
}) => {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </span>
      )}

      <input
        id={id}
        name={name}
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`peer w-full px-4 py-3 ${icon ? 'pl-16' : ''} rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#5183F4] ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />

      <label
        htmlFor={id}
        className={`absolute  px-1 transition-all duration-200 ${
          icon ? 'left-16' : 'left-4'
        } ${
          value
            ? 'top-0 text-xs text-gray-500 translate-y-0'
            : 'top-1/2 -translate-y-1/2 text-gray-400'
        } peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#5183F4] peer-focus:translate-y-0`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export const TextAreaField = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="relative h-[200px]">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=" "
        className={`peer resize-none w-full h-full px-[15px] py-[20px] rounded-[10px] border bg-white focus:outline-none focus:ring-2 focus:ring-[#5183F4] ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-[15px] px-1 bg-white transition-all duration-200 ${
          value
            ? 'top-[5px] text-xs text-gray-500'
            : 'top-1/2 -translate-y-1/2 text-gray-400'
        } peer-focus:top-[5px] peer-focus:text-xs peer-focus:text-[#5183F4] peer-focus:translate-y-0`}
      >
        {placeholder}
      </label>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

import { useField } from "formik";

export const TSPInformationInput = ({ label, helperText, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col w-full gap-6">
      {label && (
        <label className="text-[#181A20] font-medium text-base">
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        className="w-full p-[15px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#5183F4] bg-white"
      />
      {helperText && (
        <span className="text-[#B1B1B1] text-sm">{helperText}</span>
      )}
      {meta.touched && meta.error ? (
        <span className="text-red-500 text-sm">{meta.error}</span>
      ) : null}
    </div>
  );
};

export const SelectField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col w-full gap-1">
      {label && (
        <label className="text-[#181A20] font-medium text-base">
          {label}
        </label>
      )}
      <select
        {...field}
        {...props}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#5183F4]"
      >
        <option value="">選択してください</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <span className="text-red-500 text-sm">{meta.error}</span>
      ) : null}
    </div>
  );
};




