import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Modal } from "shared/ui/Modal/Modal";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { getUserInited, userActions } from "entities/User";

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", [theme], {})}>
      <Suspense fallback="">
        <Navbar />
        <Modal />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
