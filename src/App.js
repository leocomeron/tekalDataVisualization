import PhotosData from "./components/PhotosData";
import VideosData from "./components/VideosData";
import OverallData from "./components/OverallData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/UI/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" exact element={<PhotosData />} />
        <Route path="/videos" exact element={<VideosData />} />
        <Route path="/overall" exact element={<OverallData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
