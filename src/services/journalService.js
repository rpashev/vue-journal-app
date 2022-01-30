import axiosAuth from "./axios";

export default {
  
  async createJournal(formState) {
    await axiosAuth.post("/create-journal", formState);
  },

  async getJournals() {
    const response = await axiosAuth.get("");
    return response;
  },

  async getJournal(id) {
    const response = await axiosAuth.get(`/${id}`);
    return response.data;
  },

  async updateJournal(id, formState) {
    await axiosAuth.patch(`/${id}`, formState);
  },

  async deleteJournal(id) {
    await axiosAuth.delete(`/${id}`);
  },
};
