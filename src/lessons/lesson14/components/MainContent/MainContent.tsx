import { createContext, useState } from "react";
import Section from "../Section/Section";
import { MainContextComponent, MainTitle } from "./styles";
import { UserData } from "./types";

export const MainContext = createContext({
  firstName: "",
  lastName: "",
  age: 0,
});

function MainContent() {
  const [userData, setUserData] = useState<UserData>({
    firstName: "Gomer",
    lastName: "Simpson",
    age: 45,
  });

  return (
    <MainContext.Provider value={userData}>
      <MainContextComponent>
        <MainTitle>Main Title</MainTitle>
        <Section />
      </MainContextComponent>
    </MainContext.Provider>
  );
}

export default MainContent;
