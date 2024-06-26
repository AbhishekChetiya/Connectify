// RegisterPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your registration logic here, such as sending registration data to a server
   

    axios.post('https://backend-intsagram.onrender.com/users/register', {
      password: password,
      username: username,
      Avatar: avatar,
      FullName: fullName,
      email: email,
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
    setUsername('');
    setFullName('');
    setEmail('');
    setPassword('');
    setAvatar(null);
  };
  const handlelogin = () =>{
    navigate("/login");
  }
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-8 p-8 bg-yellow-50">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or
            <Link  
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              onClick={handlelogin}
            >
              log in to your existing account
            </Link>
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="username">Username</label>
              <input id="username" placeholder="Enter your username" value={username}
                onChange={handleUsernameChange} required type="text" />
            </div>
            <div className="space-y-2">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" placeholder="Enter your full name" value={fullName}
                onChange={handleFullNameChange} required type="text" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email address</label>
            <input id="email" placeholder="Enter your email" value={email}
              onChange={handleEmailChange} required type="email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input id="password" placeholder="Enter your password" required value={password} onChange={handlePasswordChange} type="password" />
          </div>
          <div className="space-y-2">
            <label htmlFor="avatar">Avatar</label>
            <input type="file"
              required
              accept="image/*"
              onChange={handleAvatarChange} />
          </div>
          <div>
            <button className="w-full bg-blue-600" type="submit" onClick={handleSubmit}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default RegisterPage;
