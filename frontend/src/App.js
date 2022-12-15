import { useEffect, useState } from "react";
import ImageSection from "./components/ImageSection";
import InputSection from "./components/InputSection";
import Navbar from "./components/Navbar";
import { nanoid } from "nanoid";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("aimage-user-id")) {
      const id = nanoid();
      localStorage.setItem("aimage-user-id", id);
      setUserId(id);
    } else {
      setUserId(localStorage.getItem("aimage-user-id"));
    }
  }, [userId]);

  return (
    <div className="App">
      <Navbar />
      <InputSection userId={userId} setLoading={setLoading} setData={setData} />
      <ImageSection loading={loading} data={data} />
    </div>
  );
}

export default App;
