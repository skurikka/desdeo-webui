//
// See also `.prettierignore`
//

/** @type {import("prettier").Options} */
const config = {
  plugins: [
    "prettier-plugin-jsdoc",
    "prettier-plugin-svelte",

    //
    // Must be the last one in the list
    // See https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
    //
    "prettier-plugin-tailwindcss",
  ],

  // See the above comment about the tailwindcss plugin
  pluginSearchDirs: false,
};

module.exports = config;
