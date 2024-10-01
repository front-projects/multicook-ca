export const customStyles = {
  container: (provided) => ({
    ...provided,
    // width: '300px', // Adjust width as needed
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: '#white', // Dark background color
    border: '1px solid #fff', // Border similar to the image
    borderRadius: '20px', // Rounded corners
    boxShadow: 'none',
    fontSize: '16px',
    padding: '5px 10px',
    '&:hover': {
      borderColor: '#555', // Slightly lighter border on hover
    },
  }),
  input: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: '#fff', // White text color
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: '#fff', // White text color
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: '#ccc', // Light gray placeholder color
  }),
  indicatorSeparator: () => ({
    display: 'none', // Remove the separator
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#ccc', // Light gray dropdown indicator
    '&:hover': {
      color: '#fff', // White on hover
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#1e1e1e', // Dark background color for the dropdown
    borderRadius: '15px', // Rounded corners for the dropdown
    marginTop: '5px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '0',
    height: '200px',
    borderRadius: '12px',
    border: '1px solid #555',
    '::-webkit-scrollbar': {
      width: '0px', // Width of the scrollbar (0px to hide)
      height: '0px', // Height of the scrollbar (0px to hide for horizontal scroll)
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent', // Color of the thumb scrollbar
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#ad8865' : '#fff', // Lighter background on hover
    color: 'black', // White text color
    padding: '10px 20px',
    fontSize: ' 14px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ad8865', // Hover effect
    },
  }),
};
