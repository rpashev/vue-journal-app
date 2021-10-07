import { ref } from "vue";
import axios from "axios";

export const useAxios = (axiosParams) => {
  const response = ref("");
  const error = ref("");
  const loading = ref(true);

  const axiosRequest = async () => {
    try {
      const result = await axios.request(axiosParams);
      response.value = result.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    response,
    error,
    loading,
    axiosRequest,
  };
};
