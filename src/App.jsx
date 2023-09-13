import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (blog) => {
    const newbookmarks = [...bookmarks, blog];
    setBookmarks(newbookmarks);
  };
  return (
    <>
      <Header></Header>
      <main className="max-w-[80vw] mx-auto flex gap-5">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;

// https://raw.githubusercontent.com/Nahid-Mahmud/practice-knoledge-pannel/main/data.json

// https://i.ibb.co/7JbsZ3M/1.jpg
// https://i.ibb.co/kQdSRZj/2.png
// https://i.ibb.co/88hKChx/3.png
// https://i.ibb.co/cxvnN2Q/4.jpg
// https://i.ibb.co/fFSJLDY/boy1.png
// https://i.ibb.co/MRbvq62/boy2.jpg
// https://i.ibb.co/YWZ09bj/girl1.jpg
// https://i.ibb.co/y6c5BRS/girl2.jpg
// https://i.ibb.co/rHf9kvR/profile.png
