import {
  MysteryIdle,
  MysteryMove,
  _10PointsIdle,
  _10PointsMove,
  _20PointsIdle,
  _20PointsMove,
  _30PointsIdle,
  _30PointsMove,
} from "../../statics/ts/_constants";
import { BaseCreature } from "./BaseCreature";

export const _10PointsCreature = () => {
  return (
    <div>
      <BaseCreature idle={_10PointsIdle.ship} move={_10PointsMove.ship} />
    </div>
  );
};

export const _20PointsCreature = () => {
  return (
    <div>
      <BaseCreature idle={_20PointsIdle.ship} move={_20PointsMove.ship} />
    </div>
  );
};

export const _30PointsCreature = () => {
  return (
    <div>
      <BaseCreature idle={_30PointsIdle.ship} move={_30PointsMove.ship} />
    </div>
  );
};

export const _MysteryCreature = () => {
  return (
    <div>
      <BaseCreature idle={MysteryIdle.ship} move={MysteryMove.ship} />
    </div>
  );
};
