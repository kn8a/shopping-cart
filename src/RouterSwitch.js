import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;