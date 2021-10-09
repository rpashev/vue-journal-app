import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default loginService = async (formState, mode) => {
  const store = useStore();
  const router = useRouter();
  let url;

  if (mode === "login") {
    url = "http://localhost:5000/auth/login";
  } else if (mode === "signup") {
    url = "http://localhost:5000/auth/signup";
  }

  try {
    console.log("haha");
    const response = await axios.post(url, {
      ...formState,
    });
    const userData = {
      token: response.data.token,
      userId: response.data.userId,
      email: response.data.email,
      firstName: response.data.firstName,
      journals: response.data.journals,
    };

    store.dispatch("login", userData);
    router.push("/journals");
  } catch (err) {
    console.log(err.response.data);
  }
};
