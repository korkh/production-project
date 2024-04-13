import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDeviceDetection } from "@/shared/lib/hooks/useDeviceDetection/useDeviceDetection";
import { Drawer } from "@/shared/ui/deprecated/Drawer";
import { Modal } from "@/shared/ui/deprecated/Modal";
import { Text } from "@/shared/ui/deprecated/Text";
import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ArticlePageGreeting = () => {
  const { t } = useTranslation("translation");
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageHaveBeenOpened } = useJsonSettings();
  const isMobile = useDeviceDetection();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageHaveBeenOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageHaveBeenOpened: true }));
    }
  }, [dispatch, isArticlesPageHaveBeenOpened]);

  const onClose = () => setIsOpen(false);

  const text = (
    <Text
      title={t("Welcome on article page")}
      text={t("Here you can search and read articles")}
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
};

export default memo(ArticlePageGreeting);
