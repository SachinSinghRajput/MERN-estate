import { useEffect, useRef } from "react";

const UploadWidget = ({ uwConfig, setPublicId, setState }) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);

  useEffect(() => {
    const initializeUploadWidget = () => {
      if (window.cloudinary && uploadButtonRef.current) {
        // Create upload widget
        uploadWidgetRef.current = window.cloudinary.createUploadWidget(
          uwConfig,
          (error, result) => {
            if (!error && result && result.event === "success") {
              console.log("Upload successful:", result.info);
              console.log(result.info.secure_url);

              setState((prev) => {
                const newImages = [result.info.secure_url, ...prev];
                console.log("Updated Images:", newImages);
                return newImages;
              });
            }
          }
        );

        // Add click event to open widget
        const handleUploadClick = () => {
          if (uploadWidgetRef.current) {
            uploadWidgetRef.current.open();
          }
        };

        const buttonElement = uploadButtonRef.current;
        buttonElement.addEventListener("click", handleUploadClick);

        // Cleanup
        return () => {
          buttonElement.removeEventListener("click", handleUploadClick);
        };
      }
    };

    initializeUploadWidget();
  }, [uwConfig, setPublicId]);

  // const removeHandler = (e) => {
  //   e.preventDefault();
  //   setAvatar(["/noavatar.png"]);
  // };

  return (
    <div className="buttons" style={{ display: "flex", gap: "20px" }}>
      <button
        ref={uploadButtonRef}
        id="upload_widget"
        className="cloudinary-button"
        style={{
          backgroundColor: "#007BFF", // Blue color
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#0056b3"; // Darker blue on hover
          e.target.style.transform = "scale(1.05)"; // Slightly enlarges
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#007BFF";
          e.target.style.transform = "scale(1)";
        }}
      >
        Upload
      </button>

      {/* <button
        id="remove_image"
        className="remove"
        onClick={removeHandler}
        style={{
          backgroundColor: "#ff4d4d", // Red color
          color: "white",
          border: "none",
          padding: "18px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#cc0000")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
      >
        Remove
      </button> */}
    </div>
  );
};

export default UploadWidget;
