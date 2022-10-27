import api from "../XpApi";

const updateData = (data, id) => {
  return api.put(`spread/${id}`, {
    ...data,
  });
};

export default updateData;
