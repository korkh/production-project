import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { useDeviceDetection } from "@/shared/lib/hooks/useDeviceDetection/useDeviceDetection";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "@/shared/ui/deprecated//Button";
import { Card } from "@/shared/ui/deprecated//Card";
import { Drawer } from "@/shared/ui/deprecated//Drawer";
import { Input } from "@/shared/ui/deprecated//Input";
import { Modal } from "@/shared/ui/deprecated//Modal";
import { HStack, VStack } from "@/shared/ui/deprecated//Stack";
import { StarRating } from "@/shared/ui/deprecated//StarRating";
import { Text } from "@/shared/ui/deprecated//Text";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo(function RatingCard(props: RatingCardProps) {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate = 0,
  } = props;
  const { t } = useTranslation("article");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
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
        data-testid="RatingCard.Input"
      />
    </>
  );

  return (
    <Card className={className} max data-testid="RatingCard">
      <VStack align="center" gap="8">
        <Text title={starsCount ? t("Thanks for your feedback!") : title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      {isMobileWithTouch ? (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <Button
              fullWidth
              onClick={acceptHandle}
              size={ButtonSize.L}
              data-testid="RatingCard.Send"
            >
              {t("Send")}
            </Button>
            <Button
              fullWidth
              onClick={cancelHandle}
              theme={ButtonTheme.OUTLINE_RED}
              size={ButtonSize.L}
              data-testid="RatingCard.Close"
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
              <Button
                onClick={cancelHandle}
                theme={ButtonTheme.OUTLINE_RED}
                data-testid="RatingCard.Close"
              >
                {t("Close")}
              </Button>
              <Button onClick={acceptHandle} data-testid="RatingCard.Send">
                {t("Send")}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  );
});
