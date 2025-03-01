interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  className?: string;
}

const SearchInput = ({
  value,
  onChange,
  onSearch,
  placeholder = "검색",
  className = "",
}: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`w-full py-[6px] px-3 bg-gray-50 border-grayScale-300 border rounded b5 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
      />
      <button
        onClick={handleSearchClick}
        className="absolute text-gray-400 transform -translate-y-1/2 right-1 top-1/2"
        aria-label="검색"
      >
        <img src="/assets/icons/search.svg" alt="검색" />
      </button>
    </div>
  );
};

export default SearchInput;
