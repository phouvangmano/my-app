import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import EditPost from "./EditPost";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day5 from "./Day5";
import Day6 from "./Day6";
import Day7 from "./Day7";
import Day8 from "./Day8";
import Day9 from "./Day9";
import Authentication from "./Authentication";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/authentication" element={<Authentication></Authentication>}></Route>
        <Route path="/edit/:id" element={<EditPost></EditPost>}></Route>
        <Route path="/day2" element={<Day2></Day2>}></Route>
        <Route path="/day3" element={<Day3></Day3>}></Route>
        <Route path="/day4" element={<Day4></Day4>}></Route>
        <Route path="/day5" element={<Day5></Day5>}></Route>
        <Route path="/day6" element={<Day6></Day6>}></Route>
        <Route path="/day7" element={<Day7></Day7>}></Route>
        <Route path="/day8" element={<Day8></Day8>}></Route>
        <Route path="/day9" element={<Day9></Day9>}></Route>
      </Routes>
    </Router> 
  );
};

export default AppRouter;
