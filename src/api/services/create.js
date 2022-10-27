import api from "../XpApi";

const postData = (data) => {
  return api.post(`spread`, {
    ...data,
  });
};

export default postData;
