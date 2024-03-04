import { useMemo } from "react";
import { Status } from "../../types";
import { Badge as ABadge } from "antd";

interface BadgeProps {
  status: Status;
}

export const Badge: React.FC<React.PropsWithChildren<BadgeProps>> = ({ status, children }) => {
  const { Ribbon } = ABadge;

  const ribbonProps = useMemo(
    () => ({
      text: status === "completed" ? "Completed" : "Current",
      color: status === "completed" ? "green" : "red",
    }),
    [status]
  );

  return <Ribbon {...ribbonProps}>{children}</Ribbon>;
};
