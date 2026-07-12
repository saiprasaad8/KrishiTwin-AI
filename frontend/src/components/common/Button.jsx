function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
