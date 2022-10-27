import api from "../XpApi";

const getByIdData = async (id) => {
  const response = await api.get(`spread/${id}`).then((response) => {
    return response.data;
  });
  return response;
};

export default getByIdData;
