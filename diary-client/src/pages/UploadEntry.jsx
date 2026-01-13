import { Link } from "react-router-dom";
import { useState } from "react";

export function UploadEntry() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("image-upload-input").click();
  };

  return (
    <>
      <h1>This is where you upload an entry!</h1>
      <p>
        Here, the user would be able to upload an entry from their diary so that
        it is saved digitally.
      </p>

      <div>
        <input
          id="image-upload-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <button onClick={handleUploadClick}>Upload Image</button>
      </div>

      {imagePreview && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview:</h3>
          <img
            src={imagePreview}
            alt="Preview"
            style={{
              maxWidth: "500px",
              maxHeight: "500px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          />
          {selectedImage && (
            <p style={{ marginTop: "10px", color: "#666" }}>
              Selected: {selectedImage.name}
            </p>
          )}
        </div>
      )}

      <br />
      <Link to="/dashboard">Back to dashboard</Link>
    </>
  );
}
