module.exports = {
  semi: true,
  trailingComma: "all",
  printWidth: 80,
  overrides: [
    {
      files: ["*.js"],
      options: {
        singleQuote: true,
        jsxSingleQuote: false,
      },
    },
  ],
};
