import styled from "styled-components";

interface Props {
  options: string[];
  placeholder?: string;
  setValue?: any;
}

const Select = (props: Props) => {
  const { options, placeholder, setValue } = props;
  return (
    <StyledSelect onChange={(e: any) => setValue(e.target.value.toLowerCase())}>
      <option value="">{placeholder ? placeholder : "Select Option"}</option>;
      {options.map((item: string) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  height: 50px;
  width: 200px;
  box-shadow: 0 1px 8px 2px rgb(214 208 208 / 42%);
  border-radius: 5px;
  border: transparent;
  padding: 10px;
  option {
    padding: 15px;
  }
  &:focus {
    outline: none;
  }
`;

export default Select;
