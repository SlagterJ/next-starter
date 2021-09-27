module.exports = {
  stories: ["../src/**/*.stories.{ts,tsx,js,jsx}"],
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
};
