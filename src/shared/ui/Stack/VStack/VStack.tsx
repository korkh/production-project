import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction"> & {
  "data-testid"?: string;
};

export const VStack = (props: VStackProps) => {
  const { align = "start", "data-testid": testId, ...rest } = props;
  return (
    <Flex {...rest} direction="column" align={align} data-testid={testId} />
  );
};
