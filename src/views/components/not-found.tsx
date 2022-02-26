import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <StyledNotFound>
      <Link to="/" className="w600">
        Back to Home
      </Link>
      <img src="/not-found.jpg" alt="not found" />
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  img {
    margin-top: 40px;
  }
`;

export default NotFound;
