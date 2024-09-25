import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../layouts/BlankLayout";

import HomePage from "../pages/HomePage";
import CollectionPage from "../pages/CollectionPage";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/searchPage";
import NotFoundPage from "../pages/notFoundPage";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import VideoDetail from "../pages/VideoDetail";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="detail" element={<VideoDetail />} />
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
