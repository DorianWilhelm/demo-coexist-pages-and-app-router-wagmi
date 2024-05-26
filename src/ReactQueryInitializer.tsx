import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

const init = async () => {
  return new Promise((resolve, reject) => {
    try {
      resolve("this helps to init the query client for wagmi...");
    } catch (error) {
      reject(error);
    }
  });
};

export const ReactQueryInitializer = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isPending } = useQuery({
    queryKey: ["init"],
    queryFn: () => init(),
  });

  if (isPending) return <div></div>;
  return children;
};
