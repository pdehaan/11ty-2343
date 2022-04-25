const footnotes = require('eleventy-plugin-footnotes');

const markdownIt = require("markdown-it");

const md = markdownIt({
  html: true,
  linkify: true,
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("base", "layouts/base.liquid");
  eleventyConfig.addGlobalData("layout", "base");
  eleventyConfig.addPlugin(footnotes, { /* … */ });
  eleventyConfig.addFilter("markdown", function (markup) {
    return md.renderInline(markup);
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
