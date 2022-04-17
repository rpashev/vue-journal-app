import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import BaseSpinner from "./components/UI/BaseSpinner.vue";

const app = createApp(App);

app.use(store).use(router).mount("#app");

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);
app.component("base-spinner", BaseSpinner);
