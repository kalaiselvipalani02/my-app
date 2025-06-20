import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/posts" element={<Post />}></Route>
        <Route path="/posts/:postId" element={<PostDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
