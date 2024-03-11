import { lazy } from "react";

const <FTName % capitalize>Lazy = lazy(() => import("./<FTName % capitalize>"));

export const <FTName % capitalize>Async = (props: <FTName % capitalize>Props) => {
  return (
    <Suspense fallback={<Skeleton width={"100%"} height={140} />}>
      <<FTName % capitalize>Lazy {...props} />
    </Suspense>
  );
};
