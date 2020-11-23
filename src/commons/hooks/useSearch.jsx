const { useState, useEffect } = require("react");

const useSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      value.length >= 3 ? onSearch(value) : onSearch(undefined);
    }, 500);
    return () => clearTimeout(timer);
  }, [value, onSearch]);

  return [value, onChange];
};
export default useSearch;
