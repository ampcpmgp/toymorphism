export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "#fff",
    values: [
      { name: "white", value: "#fff" },
      { name: "black", value: "#000" },
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
      { name: "blue", value: "#00f" },
      { name: "yellow", value: "#ff0" },
      { name: "cyan", value: "#0ff" },
      { name: "magenta", value: "#f0f" },
      { name: "gray", value: "#ccc" },
      { name: "dark-gray", value: "#333" },
    ],
  },
};
