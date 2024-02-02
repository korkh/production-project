import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { getUserInited, userActions } from "entities/User";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
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
