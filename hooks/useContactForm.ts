import { useState } from "react";

const requiredFields = ["name", "email", "company", "project"];

export function useContactForm() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (name: string, value: string) => {
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
  };

  const submit = () => {
    const nextErrors = Object.fromEntries(
      requiredFields
        .filter((field) => !form[field]?.trim())
        .map((field) => [field, "This field is required."]),
    );

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setIsSending(true);
    window.setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 700);
  };

  return { errors, form, isSending, isSubmitted, submit, updateField };
}
