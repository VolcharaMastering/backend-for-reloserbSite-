import { v4 as uuidv4 } from "uuid";

const generateRandomKey = () => {
  return `${uuidv4()}-${Math.floor(Math.random() * 1000)}`;
};

export default generateRandomKey;
