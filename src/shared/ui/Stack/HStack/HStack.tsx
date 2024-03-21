import { Flex, FlexProps } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction"> & {
  "data-testid"?: string;
};

export const HStack = (props: HStackProps) => {
  const { "data-testid": testId, ...rest } = props;
  return <Flex direction="row" {...rest} data-testid={testId} />;
};
