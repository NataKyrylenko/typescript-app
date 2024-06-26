import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";
import Clients from "pages/Clients/Clients";
import GreenEco from "pages/Clients/Client-GreenEco/GreeenEco";
import QuantumGen from "pages/Clients/Client-QuantumGen/QuantumGen";
import ZenithRobotics from "pages/Clients/Client-ZenithRobotics/ZenithRobotics";
import Lesson14 from "lessons/lesson14/Lesson14";

//import Lesson06 from './lessons/lesson06/Lesson06';
//import Homework06 from './homeworks/Homework06/Homework06';
//import Lesson07 from './lessons/Lesson07/Lesson07';
//import Homework07 from 'homeworks/Homework07/Homework07';
//import Lesson08 from 'lessons/Lesson08/Lesson08';
//import Homework08 from 'homeworks/Homework08/Homework08';
//import Lesson09 from 'lessons/lesson09/Lesson09';
//import Homework09 from 'homeworks/Homework09/Homework09';
//import Lesson10 from "lessons/Lesson10_practice/Lesson10";
//import Lesson11 from "lessons/lesson11/Lesson11";
//import Homework11 from "homeworks/Homework11/Homework11";
//import Lesson12 from "lessons/lesson12/Lesson12";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/clients" element={<Clients children={undefined} />} />
          <Route path="/clients/greenEco" element={<GreenEco />} />
          <Route path="/clients/quantumGen" element={<QuantumGen />} />
          <Route path="/clients/zenithRobotics" element={<ZenithRobotics />} />

          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout> */}

      {/* <Lesson06/> */}
      {/* <Homework06/> */}
      {/* <Lesson07/> */}
      {/* <Homework07/> */}
      {/* <Lesson08/> */}
      {/* <Homework08/> */}
      {/* <Lesson09/> */}
      {/* <Homework09/> */}
      {/* <Lesson10/> */}
      {/* <Lesson11/> */}
      {/* <Homework11/> */}
      {/* <Lesson12/> */}
      <Lesson14/>
    </BrowserRouter>
  );
}

export default App;
