import axiosAuth from "./axios";

export default {
  async createJournal(formState) {
    
      const response = await axiosAuth.post("/create-journal", formState);
      console.log(response.data);
    
  },
};
