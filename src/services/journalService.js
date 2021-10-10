import axiosAuth from "./axios";

export default {
  async createJournal(formState) {
    const response = await axiosAuth.post("/create-journal", formState);
    console.log(response.data);
  },
  async getJournals() {
    const response = await axiosAuth.get("", {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    });
    console.log(response)
    return response;
  },
  async getJournal(id) {
    const response = await axiosAuth.get(`/${id}`);
    // console.log(response.data);
    return response.data;
  }
};
