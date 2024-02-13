"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-start bg-black text-white  justify-start  self-start px-2 py-1 rounded-md text-sm font-semibold opacity-80 hover:opacity-90"
    >
      Submit
    </button>
  );
}
