import axiosAuth from "./axios";

export default {
  async createEntry(title, body, date, id) {
    const data = { title, body, date };
    await axiosAuth.post(`/${id}/create-entry`, data);
  },
  async getEntry(journalID, entryID) {
    const entry = await axiosAuth.get(`/${journalID}/${entryID}`)
    return entry.data;
  }
};
