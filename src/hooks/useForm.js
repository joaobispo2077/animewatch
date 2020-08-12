import { useState } from 'react';

export default function useForm(valoresInicias) {
  const [values, setValues] = useState(valoresInicias);
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(valoresInicias);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}
