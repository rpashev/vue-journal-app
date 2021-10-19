import axiosAuth from "./axios";

export default {
  async createEntry(title, body, date, id) {
    const data = { title, body, date };
    await axiosAuth.post(`/${id}/create-entry`, data);
  },
  async getEntry(journalID, entryID) {
    const entry = await axiosAuth.get(`/${journalID}/${entryID}`);
    return entry.data;
  },
  async editEntry(journalID, entryID, title, body) {
    const data = { title, body };
    await axiosAuth.patch(`/${journalID}/${entryID}`, data);
  },
  async deleteEntry(journalID, entryID) {
    await axiosAuth.delete(`/${journalID}/${entryID}s`);
  },
};
