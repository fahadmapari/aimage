import React from "react";
import idea from "../assets/inspiration.png";
import HashLoader from "react-spinners/HashLoader";

const ImageSection = ({ loading, data }) => {
  return (
    <div className="image-section">
      {!loading && data.url ? (
        <div className="generated-container">
          <img
            className="generated-image"
            src={data.url}
            alt="ai generated image"
          />
          <a className="download-link" href={data.url} download>
            DOWNLOAD
          </a>
        </div>
      ) : (
        <div className="image-box">
          {loading ? (
            <HashLoader color="#6877FF" className="loader" size={150} />
          ) : (
            <>
              <img className="idea-img" src={idea} alt="idea image" />
              <p className="idea-msg">
                Your amazing idea will be displayed here.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSection;
