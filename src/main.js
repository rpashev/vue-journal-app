import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);
app.use(store).use(router).mount("#app");

app.component("base-button", BaseButton);
