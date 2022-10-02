import './style.css';

export const Card = ({ children, className }) => {
  const classes = 'card ' + className;
  return (
    <div className={classes}>{children}</div>
  );
};