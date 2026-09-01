import { devices } from "../data/data";

const Exercise2 = () => {
  const deviceList = devices
    .filter((device) => device.width >= 700)
    .map((device) => (
      <li key={device.id}>
        {device.name} {device.price >= 1000 ? "💰 高級品" : "🛒 お買い得"}
      </li>
    ));

  return <ul>{deviceList}</ul>;
};

export default Exercise2;
