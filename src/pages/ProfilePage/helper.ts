import { useErrorBoundary } from "react-error-boundary";
import { useQuery } from "react-query";

import { getMe } from "@apis";

import type { ProfilePrepareHook } from "./interfaces";

const useProfilePagePrepareHook = (): ProfilePrepareHook => {
  const { data, error, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: getMe,
  });
  const { showBoundary } = useErrorBoundary();

  if (isError) {
    showBoundary(error);
  }

  return { user: data ?? { email: null } };
};

export { useProfilePagePrepareHook };
