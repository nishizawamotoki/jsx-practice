import { devices } from "../data/data";

const Exercise2 = () => {
  const listDevices = devices
    .filter((device) => device.width >= 700)
    .map((device) => (
      <li key={device.id}>
        {device.name} {device.price >= 1000 ? "💰 高級品" : "🛒 お買い得"}
      </li>
    ));

  return <ul>{listDevices}</ul>;
};

export default Exercise2;
