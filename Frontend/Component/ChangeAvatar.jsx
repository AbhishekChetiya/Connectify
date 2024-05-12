import axios from 'axios';
import React, { useState } from 'react'
import FormData from 'form-data'
const UpdateAvatar = () => {
  const [postimg, setPostimg] = useState(null);
  const handleAvatarChange = (event) => {
    setPostimg(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const getLocalStorageItem = JSON.parse(localStorage.getItem("user"));
    console.log(postimg);
    try {
    const response = await axios.post('http://localhost:3000/users/UpdateAvatar', { Avatar:postimg , hello :'kj'}, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${getLocalStorageItem?.Token}`,
        }
      });
      console.log(response);
    } catch (error) {
      console.log("Error:", error);
    }

    console.log("Done");
  };

  return (
    <div className="mx-auto max-w-md space-y-6 py-12 my-20 bg-yellow-400">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Upload an Image</h2>
        <p className="text-gray-500 dark:text-gray-400">Select an image file to upload.</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="image">Image</label>
          <input id="image" required accept="image/*" type="file" onChange={handleAvatarChange} />
        </div>
        <button className="w-full bg-blue-700" type="submit" onClick={handleSubmit}>
          Upload
        </button>
      </form>
    </div>
  )

}

export default UpdateAvatar