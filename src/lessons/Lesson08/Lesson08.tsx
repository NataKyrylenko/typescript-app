import {
  BoxComponent,
  Lesson08Component,
  ButtonComponents,
} from "./styles";

function Lesson08() {
  //   const styleObj = {
  //     fontSize: "42px",
  //     color: "blue",
  //   };

  return (
    <Lesson08Component>
      <BoxComponent>My Block</BoxComponent>
      <ButtonComponents mainButton>Custom Button</ButtonComponents>
      <ButtonComponents>Custom Button</ButtonComponents>
      {/* <p style={styleObj}>Hello</p> */}
    </Lesson08Component>
  );
}

export default Lesson08;
