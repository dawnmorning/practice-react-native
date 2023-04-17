import { useState } from "react";

export function useInput(submitAction) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    setInputValue("");
    submitAction(inputValue);
  };
  return { inputValue, handleChange, handleSubmit };
}
