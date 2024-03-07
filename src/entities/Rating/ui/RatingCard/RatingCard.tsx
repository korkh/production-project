import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import cls from "./RatingCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme, ButtonSize } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { Card } from "shared/ui/Card/Card";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { Input } from "shared/ui/Input/Input";
import { Modal } from "shared/ui/Modal/Modal";
import { VStack, HStack } from "shared/ui/Stack";
import { StarRating } from "shared/ui/StarRating/StarRating";
import { useDeviceDetection } from "shared/lib/hooks/useDeviceDetection/useDeviceDetection";

interface RatingCardProps {
  className?: string;
  title: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo(function RatingCard(props: RatingCardProps) {
  const { className, onAccept, feedbackTitle, hasFeedback, onCancel, title } =
    props;
  const { t } = useTranslation("article");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const isMobileWithTouch = useDeviceDetection();

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      //Modal will be opened if RatingCard has a hasFeedback flag = true
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t("Your feedback")}
      />
    </>
  );

  return (
    <Card className={classNames(cls.RatingCard, [className], {})}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      {isMobileWithTouch ? (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
              {t("Send")}
            </Button>
            <Button
              fullWidth
              onClick={cancelHandle}
              theme={ButtonTheme.OUTLINE_RED}
              size={ButtonSize.L}
            >
              {t("Close")}
            </Button>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                {t("Close")}
              </Button>
              <Button onClick={acceptHandle}>{t("Send")}</Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  );
});
