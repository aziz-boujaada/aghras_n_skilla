
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/LandingPage';
import { LoginForm } from './components/Auth/Login';
import { SuperAdminDashboard } from './components/dashboards/SuperAdminDashboard';
import { CommuneDashboard } from './components/dashboards/CommuneDashboard';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { ForgotPassword } from './components/Auth/ForgotPassword';

function App() {
  return (
    <Router basename="/aghras_n_skilla">
      <Routes>
      
      <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
       
        <Route 
          path="/super-admin/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['super_admin']}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          } 
        />

        
        <Route 
          path="/commune/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['commune_president']}>
              <CommuneDashboard />
            </ProtectedRoute>
          } 
        />

       
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
