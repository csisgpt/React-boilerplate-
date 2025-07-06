import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useIsAuthenticated } from '@/app/stores/hooks';
import {
  PublicLayout,
  AuthLayout,
  DashboardLayout,
} from '@/app/layouts';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  DashboardPage,
  ProfilePage,
  BlogListPage,
  BlogPostPage,
  FAQPage,
  AboutPage,
  ContactPage,
  NotFoundPage,
  ForbiddenPage,
  ServerErrorPage,
  SettingsPage,
} from '@/app/pages';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuth = useIsAuthenticated();
  return isAuth ? <>{children}</> : <Navigate to="/login" replace />;
};

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route index element={<HomePage />} />
      <Route path="blog" element={<BlogListPage />} />
      <Route path="blog/:id" element={<BlogPostPage />} />
      <Route path="faq" element={<FAQPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="403" element={<ForbiddenPage />} />
      <Route path="500" element={<ServerErrorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
    <Route element={<AuthLayout title="Auth" />}> 
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
    </Route>
    <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>
  </Routes>
);
