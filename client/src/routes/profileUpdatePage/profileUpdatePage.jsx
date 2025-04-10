import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debugging log
    setError("");

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    console.log("Form data:", { username, email, password });
    if (
      username === currentUser.username &&
      email === currentUser.email &&
      !password
    ) {
      setError("No changes detected!");
      return;
    }

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      console.log("API response:", res); // Debugging log

      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log("Error occurred:", err);
      setError(err.response.data.message || "An error occurred");
    } finally {
      console.log("isLoading set to false");
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleUpdate}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span className="error">{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.png"}
          alt=""
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "djz52bmsd",
            uploadPreset: "estate",
            multiple: false,
            // maxImageFileSize: 2000000,
            folder: "avatars",
            autoUpload: false,
            uploadImmediately: false,
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
