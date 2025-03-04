import { useUserStore, Role, roleNames } from "@/stores/useUserStore";

interface Option {
  type: Role;
  activeColor: string;
}

const UserPicker = () => {
  const allOptions: Option[] = [
    {
      type: "headquarters",
      activeColor: "text-secondary-400",
    },
    {
      type: "dealership",
      activeColor: "text-secondary-400",
    },
    {
      type: "admin",
      activeColor: "text-secondary-400",
    },
  ];

  const selectedRole = useUserStore((state) => state.selectedRole);
  const setSelectedRole = useUserStore((state) => state.setSelectedRole);

  const currentIndex = allOptions.findIndex(
    (option) => option.type === selectedRole
  );
  const translateXValue = `${currentIndex * 100}%`;

  return (
    <div className="w-fit relative flex h-fit rounded-lg p-[2px] bg-grayScale-100 overflow-hidden">
      <div
        className="absolute top-[2px] left-[2px] w-[146px] h-[40px] bg-white rounded-[7px] transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${translateXValue})` }}
      />
      {allOptions.map(({ type, activeColor }) => (
        <div
          key={type}
          className={`center relative w-[146px] h-[40px] b3 rounded-[7px] cursor-pointer
            ${selectedRole === type ? `${activeColor}` : "text-grayScale-500"}`}
          onClick={() => setSelectedRole(type)}
        >
          {roleNames[type]}
        </div>
      ))}
    </div>
  );
};

export default UserPicker;
