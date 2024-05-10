import Button from "components/Button/Button";
import { UserTitle, UserWrapper } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Users() {
  const navigate = useNavigate();
  const location = useLocation();

  const goTOHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    return () => {
      console.log("component users unmouted");
    };
  }, []);

  return (
    <UserWrapper>
      <UserTitle>Users page</UserTitle>
      <Button name="Go to Home" onButtonClick={goTOHomePage} />
    </UserWrapper>
  );
}
export default Users;
