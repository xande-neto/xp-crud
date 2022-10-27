import api from "../XpApi";

const deleteData = (id) => {
  return api.delete(`spread/${id}`);
};

export default deleteData;
