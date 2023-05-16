// https://vitepress.dev/guide/custom-theme
import Theme from "vitepress/theme";
import "./style.css";
import CustomLayout from "./CustomLayout.vue";

export default {
  ...Theme,
  Layout: CustomLayout,
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // },
};
