import { Flex, FlexProps } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction"> & {
  "data-testid"?: string;
};

/**
 * @deprecated This component is deprecated. Please use the new components from the redesigned folder.
 */
export const HStack = (props: HStackProps) => {
  const { "data-testid": testId, ...rest } = props;
  return <Flex direction="row" {...rest} data-testid={testId} />;
};
