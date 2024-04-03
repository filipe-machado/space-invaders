import { Fragment } from "react/jsx-runtime";
import Pixel from "../../atoms/Pixel";
import "./index.scss";

type ShipType = {
  ship: Array<Array<number>>;
  color?: string;
};

const Ship = ({ ship, color = "#000" }: ShipType) => {
  return (
    <div className="ship">
      {ship.map((row, index) => (
        <div key={index}>
          {row.map((pixel, pixelIndex) => (
            <Fragment key={pixelIndex}>
              <Pixel color={pixel ? color : "#fff"} />
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Ship;
