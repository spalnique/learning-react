const alertStyles = {
  margin: 8,
  padding: '12px 16px',
  borderRadius: 4,
  backgroundColor: 'gray',
  color: 'white',
};

const setBgColor = variant => {
  switch (variant) {
    case 'info':
      return 'blue';
    case 'success':
      return 'green';
    case 'error':
      return 'red';
    case 'warning':
      return 'orange';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Alert = ({ variant, children }) => {
  return (
    <p style={{ ...alertStyles, backgroundColor: setBgColor(variant) }}>
      {children}
    </p>
  );
};
