import styled from "styled-components";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

interface ButtonProps {
  label: string;
  to: string;
  className?: string;
  icon?: any | null;
  loading?: boolean;
  disabled?: boolean;
}

interface AnchorProps {
  label: string;
  className?: string;
  icon?: any | null;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}
const Button = (props: ButtonProps) => {
  const { label, icon, loading } = props;
  return (
    <StyledButton {...props}>
      {icon && <i className="icon">{icon}</i>}
      {label}
      {loading && (
        <span className="loader">
          <Spinner className={"spinner xs"} />
        </span>
      )}
    </StyledButton>
  );
};

export const SimpleAnchorButton = (props: AnchorProps) => {
  const { label, icon, loading } = props;
  return (
    <StyledSimpleAnchorButton {...props}>
      {icon && <i className="icon">{icon}</i>}
      {label}
      {loading && (
        <span className="loader">
          <Spinner className={"spinner xs"} />
        </span>
      )}
    </StyledSimpleAnchorButton>
  );
};

const StyledButton = styled(Link)`
  min-width: 136px;
  height: 40px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.elements};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-width: 0;
  cursor: pointer;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  box-shadow: 0 1px 8px 3px rgb(214 208 208 / 78%);
  transition: all 0.3s;
  position: relative;
  &.sm {
    min-width: 96px;
    height: 28px;
  }
  &:hover {
    box-shadow: none;
    .icon {
      margin-right: 7px;
    }
  }
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    transition: all 0.3s;
  }
  .loader {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }
`;

const StyledSimpleAnchorButton = styled("a")`
  min-width: 136px;
  height: 40px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.elements};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-width: 0;
  cursor: pointer;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  box-shadow: 0 1px 8px 3px rgb(214 208 208 / 78%);
  transition: all 0.3s;
  position: relative;
  &.sm {
    min-width: 96px;
    height: 28px;
  }
  &:hover {
    box-shadow: none;
    .icon {
      margin-right: 7px;
    }
  }
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    transition: all 0.3s;
  }
  .loader {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }
`;

export default Button;
