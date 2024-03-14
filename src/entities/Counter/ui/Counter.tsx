import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { counterActions, useCounterActions } from "../model/slice/counterSlice";

import { Button } from "@/shared/ui/Button";
import { useCounterValue } from "..";

export function Counter() {
  const counterValue = useCounterValue();
  const { increment, decrement } = useCounterActions();

  const { t } = useTranslation();

  const handleInc = () => {
    increment();
  };

  const handleDecr = () => {
    decrement();
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleInc} data-testid="increment-btn">
        {t("increment")}
      </Button>
      <Button data-testid="decrement-btn" onClick={handleDecr}>
        {t("decrement")}
      </Button>
    </div>
  );
}
