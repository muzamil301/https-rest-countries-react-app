import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-outline.svg";

interface Props {
  placeholder?: string;
  setValue?: any;
}

const SearchBar = (props: Props) => {
  const { placeholder, setValue } = props;
  return (
    <StyledSearch>
      <div className="icon">
        <SearchIcon />
      </div>
      <input
        placeholder={placeholder ? placeholder : "Search Here"}
        type={"text"}
        onChange={(e: any) => {
          setValue(e.target.value);
        }}
      />
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  height: 56px;
  width: 480px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 8px 2px ${(props) => props.theme.colors.shadow};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.elements};
  color: ${(props) => props.theme.colors.inputColor};
  padding: 19px 32px;
  .icon {
    width: 18px;
    fill-color: ${(props) => props.theme.colors.inputColor};
  }
  input {
    width: 100%;
    border: 0 none;
    margin-left: 23px;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

export default SearchBar;
