import api from "../XpApi";

const readData = async () => {
  const response = await api.get(`spread`).then((response) => {
    return response.data;
  });
  return response;
};

export default readData;
