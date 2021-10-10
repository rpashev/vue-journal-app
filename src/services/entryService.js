import axiosAuth from "./axios";

export default {
  async createEntry(title, body, date, id) {
    const data = { title, body, date };
    await axiosAuth.post(`/${id}/create-entry`, data);
  },
};
