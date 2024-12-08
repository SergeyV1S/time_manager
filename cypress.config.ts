import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents() {
      this.baseUrl = "http://localhost:3000";
    }
  }
});
