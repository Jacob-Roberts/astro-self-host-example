import node from "@astrojs/node";
// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: true,
		}),
	],
	adapter: node({
		mode: "standalone",
	}),
});
