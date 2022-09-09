import { Route, Routes, Navigate } from "react-router-dom";

import { CheckingAuth } from "../ui/components";

import useCheckAuth from "../hooks/useCheckAuth";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";

function AppRouter() {
  const status = useCheckAuth();

  if (status === "checking") return <CheckingAuth />;

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}

export default AppRouter;
