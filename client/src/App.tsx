import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./app-layout";
import ROUTES from "./routes";

const Spinner = () => <div />;

function App() {
  const publicRoutes = Object.values(ROUTES).filter((route) => route.private === false);
  return (
    <AppLayout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {publicRoutes.map((route, index) => {
            return <Route {...route} element={<route.element />} key={index} />;
          })}
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;
