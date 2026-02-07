interface OrnamentProps {
  className?: string;
}

export function Ornament({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 12c22-10 44-10 66 0s44 10 66 0 44-10 84 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="110" cy="12" r="3" fill="currentColor" />
      <path
        d="M104 12c0-6 4-10 6-10s6 4 6 10"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
