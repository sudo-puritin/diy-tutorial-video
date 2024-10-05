import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../layouts/BlankLayout";

import HomePage from "../pages/HomePage";
import CollectionPage from "../pages/CollectionPage";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

import UserPage from "../pages/UserPage";
import MyVideoPage from "../pages/UserPage/MyVideoPage";
import SettingPage from "../pages/UserPage/SettingPage";
import CreatingVideoPage from "../pages/UserPage/CreatingVideoPage";
import EditVideoPage from "../pages/UserPage/EditVideoPage";

import AuthRequire from "./AuthRequire";
import WatchVideoPage from "../pages/WatchVideoPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="collection" element={<CollectionPage />} />

        <Route
          path="user"
          element={
            <AuthRequire>
              <UserPage />
            </AuthRequire>
          }
        >
          <Route index element={<MyVideoPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="video/creating" element={<CreatingVideoPage />} />
          <Route path="video/edit/:id" element={<EditVideoPage />} />
        </Route>

        <Route path="video/:videoID" element={<WatchVideoPage />}></Route>
      </Route>

      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
