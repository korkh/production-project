import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return <div>{t("Main pagе")}</div>;
};

export default MainPage;
