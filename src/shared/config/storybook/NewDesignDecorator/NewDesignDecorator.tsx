import { setFeatureFlags } from "@/shared/lib/features";
import { FC, ReactNode } from "react";
import { getAllFeatureFlags } from "@/shared/lib/features/lib/setGetFeatures";

interface Props {
	children?: ReactNode;
}

const NewDesignDecorator: FC<Props> = ({ children }) => {
	setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
	return <div>{children}</div>;
};
export default NewDesignDecorator;
