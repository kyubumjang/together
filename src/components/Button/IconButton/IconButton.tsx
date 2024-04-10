interface IconButtonProps {
  icon: JSX.Element;
  handleClick: () => void;
}

const IconButton = (props: IconButtonProps) => {
  const { icon, handleClick } = props;

  return <button onClick={handleClick}>{icon}</button>;
};

export default IconButton;
