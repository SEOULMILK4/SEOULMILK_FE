interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <img
      src="/assets/icons/delete.svg"
      alt="delete"
      className="cursor-pointer hover:rounded-full hover:bg-grayScale-200"
      onClick={onClick}
    />
  );
};

export default DeleteButton;
