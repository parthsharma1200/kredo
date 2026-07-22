import React from "react";
import AuthInput from "./AuthInput";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
};

export default function PasswordInput({
  value,
  onChange,
  label = "Password",
  placeholder = "Enter your password",
}: PasswordInputProps) {
  return (
    <AuthInput
      label={label}
      type="password"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}