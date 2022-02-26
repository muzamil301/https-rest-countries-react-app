import styled from "styled-components";

interface Props {
  className?: string;
}
const Spinner = (props: Props) => {
  return <StyledSpinner {...props}></StyledSpinner>;
};

const StyledSpinner = styled.div`
  border: 8px solid #f1f1f1;
  border-top: 8px solid #333;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -ms-border-radius: 100px;
  -o-border-radius: 100px;
  animation: spin 2s linear infinite;
  -webkit-animation: spin 2s linear infinite;
  &.sm {
    width: 40px;
    height: 40px;
    border-width: 5px;
  }
  &.xs {
    width: 20px;
    height: 20px;
    border-width: 2px;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
