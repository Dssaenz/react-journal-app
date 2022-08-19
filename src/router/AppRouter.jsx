import { Route, Routes } from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
import JournalPage from '../journal/pages/JournalPage';

function AppRouter() {
  return(
    <Routes>
      {/* Login and register */}
      <Route  path='/auth/*' element={<AuthRoutes />} />
      {/* Home */}
      <Route path='/*' element={<JournalPage />} />
    </Routes>
  )
}

export default AppRouter;