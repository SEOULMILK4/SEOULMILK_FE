interface NameTagProps {
  name: string;
}

/**
 *
 * @param name - 이름
 * @returns
 */
const NameTag = ({ name }: NameTagProps) => {
  return (
    <div className="w-fit center px-1 py-[2px] rounded-[4px] bg-secondary-25 text-secondary-500 font-semibold text-b2">
      {name}
    </div>
  );
};

export default NameTag;
