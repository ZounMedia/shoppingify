import { FC } from "react";
import { Line } from "rc-progress";

interface Props {
  percent: number;
  color?: string;
}

const ItemPercentage: FC<Props> = ({ percent, color }) => {
  return (
    <>
      <Line
        percent={percent}
        strokeWidth={3}
        trailWidth={3}
        strokeColor={color ? color : "#f9a109"}
      />
    </>
  );
};

export default ItemPercentage;
