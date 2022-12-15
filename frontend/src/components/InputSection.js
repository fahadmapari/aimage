import React, { useRef } from "react";
import { generateImage } from "../data/axios";

const InputSection = ({ setLoading, setData, userId }) => {
  const inputRef = useRef(null);

  const handleClick = async (e) => {
    if (inputRef.current.value !== "") {
      try {
        setLoading(true);
        const response = await generateImage(inputRef.current.value);
        setLoading(false);
        setData(response.data[0]);
      } catch (err) {
        setLoading(false);
        setData({});
        alert("Something went wrong please try again later");
      }
    }
  };

  return (
    <div className="input-section">
      <input
        type="text"
        name="description"
        placeholder="Provide an detailed description for image you want to generate"
        ref={inputRef}
      />
      <button onClick={() => handleClick()}>Generate</button>
    </div>
  );
};

export default InputSection;
