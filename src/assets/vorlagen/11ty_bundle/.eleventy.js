module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("**/*.css");
    eleventyConfig.addPassthroughCopy("**/*.woff");
    eleventyConfig.addPassthroughCopy("**/*.woff2");
    eleventyConfig.addPassthroughCopy("**/*.zip");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");

eleventyConfig.addFilter("addTargetBlank", function(content) {
    const { JSDOM } = require("jsdom");
    const dom = new JSDOM(content);
    const links = dom.window.document.querySelectorAll("a");

    links.forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    return dom.serialize();
  });


};


