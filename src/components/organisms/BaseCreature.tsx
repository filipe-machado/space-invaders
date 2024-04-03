import React from "react";
import Ship from "../molecules/Ship";

type BaseCreatureType = {
  idle: Array<Array<number>>;
  move: Array<Array<number>>;
  time?: number;
};

export const BaseCreature = ({ idle, move, time = 1000 }: BaseCreatureType) => {
  const [map, setMap] = React.useState(idle);
  const [moving, setMoving] = React.useState(true);

  const animation = setTimeout(() => {
    setMap(moving ? move : idle);
    setMoving(!moving);
  }, time);

  React.useEffect(() => {
    animation;

    return () => {
      clearInterval(animation);
    };
  }, [animation]);

  return (
    <div>
      <Ship ship={map} />
    </div>
  );
};
