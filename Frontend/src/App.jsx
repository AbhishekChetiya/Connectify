import React, { useState } from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import RegisterPage from '../Component/Register.jsx';
import ProfilePage from '../Component/Profile.jsx';
import ChangeAvatarPage from '../Component/ChangeAvatar.jsx';
import LoginPage from '../Component/Login.jsx';
import ButtonPage from '../Component/header.jsx';
import PostPage from '../Component/Post_somethings.jsx';
import SinglePost from '../Component/SinglePost.jsx';
import ProfilePage1 from '../Component/Profile1.jsx';
const App = () => {
   const router = createBrowserRouter([
        {
          path: "/",
          element: <ButtonPage />,

          children: [
            {
                path: "login",
                element: <LoginPage/>,
              },
              {
                path: "UpdateAvatar",
                element: <ChangeAvatarPage/>,
              },{
                path: "Profile",
                element: <ProfilePage/>,
              },
              {
                path:"Post/:postid",
                element: <SinglePost/>
              },
              {
                path:"Profile/:_id",
                element: <ProfilePage1/>,
              },
              {
                path: "register",
                element:<RegisterPage/>,
              },
              {
                path: "Post",
                element:<PostPage/>,
              },
          ],
        },
      ]);
    return (
        <div>
           <RouterProvider router = {router}/>
        </div>
    );
}

export default App