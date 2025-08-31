import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/tailwind.css"],
	modules: [
		"@nuxt/test-utils",
		"@nuxt/image",
		"@pinia/nuxt",
		"shadcn-nuxt",
		"@vueuse/nuxt",
		"convex-nuxt",
		"@clerk/nuxt",
	],
	vite: {
		plugins: [tailwindcss()],
	},
	shadcn: {
		prefix: "",
		componentDir: "./app/components/ui",
	},
	convex: {
		url: process.env.CONVEX_URL,
	},
});
