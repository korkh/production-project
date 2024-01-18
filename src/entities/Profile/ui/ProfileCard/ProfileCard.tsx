import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  //   const isLoading = useSelector(getProfileIsLoading);
  //   const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.profileCard, [className], {})}>
      <div className={cls.header}>
        <Text title={t("Profile")} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t("Edit")}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.firstName || ""}
          placeholder={t("Your name")}
          className={cls.input}
        />
        <Input
          value={data?.lastName || ""}
          placeholder={t("Your lastName")}
          className={cls.input}
        />
        <p >{t("Testing inside Profile")}</p>
      </div>
    </div>
  );
};
