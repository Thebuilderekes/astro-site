import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import React from "react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [react(), tailwind()],
});
