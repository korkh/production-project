import { FeatureFlags } from "@/shared/types/featureFlags";
import { setFeatureFlags } from "@/shared/lib/features";
import { FC, ReactNode } from "react";

interface Props {
	children?: ReactNode;
	features: FeatureFlags;
}

const FeaturesFlagsDecorator: FC<Props> = ({ children, features }) => {
	setFeatureFlags(features);
	return <div>{children}</div>;
};
export default FeaturesFlagsDecorator;
