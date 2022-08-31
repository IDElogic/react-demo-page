import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, WeatherApp, Privacy, TermsandCondition } from "./container";

import { Calculator, PageNotFound } from "./components";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mainContainer" element={<Privacy />} />
          <Route path="/termsandCondition" element={<TermsandCondition />} />
          <Route path="/weatherApp" element={<WeatherApp />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
