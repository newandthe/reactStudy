function BaseButton({ className, children }) {
  return (
    <button className={className} onClick={e => e.preventDefault()}>
      {children}
    </button>
  );
}

export default BaseButton;
