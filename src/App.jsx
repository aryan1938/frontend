import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './component/Posts';
import PostPage from './component/PostPage';
import Login from './Auth/Login';
import ProfilePage from './component/ProfilePage';
import Master_user from './Master/Master_user';
import Master_admin from './Master/Master_admin';
import Category from './component/Category'
import All_user from './component/All_user';
import Single_user from './component/Single_user';
import Register from './Auth/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Master_user />}>
            <Route path='/' element={<Posts />} />
            <Route path="singlepost" element={<PostPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="allcategory" element={<Category />} />
          </Route>

          <Route path="admin" element={<Master_admin />}>
            <Route path="post" element={<Posts />} />
            <Route path="singlepost" element={<PostPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="allcategory" element={<Category />} />
            <Route path="alluser" element={<All_user />} />
            <Route path="singleuser" element={<Single_user />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
