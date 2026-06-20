import { useState } from "react";

export function TestButton({ label }: { label: string }) {
  const [count, setCount] = useState(0);
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      onClick={() => setCount(count + 1)}
    >
      {label} ({count})
    </button>
  );
}
