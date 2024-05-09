// RegisterPage.jsx

import React, { useState } from 'react';
import './ChangeAvatar.css'; // Import the CSS file for styling

const ChangeAvatarPage = () => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your registration logic here, such as sending registration data to a server
    console.log('Avatar:', avatar);
    // Reset the form fields after submission
    setAvatar(null);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>AvatarUpdate</h2>
        <label>
        <h3> NewAvatar: </h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ChangeAvatarPage;
