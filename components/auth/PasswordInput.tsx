import React from "react";
import AuthInput from "./AuthInput";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordInput({
  value,
  onChange,
}: PasswordInputProps) {
  return (
    <AuthInput
      label="Password"
      type="password"
      placeholder="Enter your password"
      value={value}
      onChange={onChange}
    />
  );
}