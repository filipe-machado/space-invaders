import "./index.scss";

const Pixel = ({ color }: Record<string, string>) => {
  return <div className="pixel" style={{ background: color }} />;
};

export default Pixel;
