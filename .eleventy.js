module.exports = function (eleventyConfig) {

    // eleventyConfig.addPassthroughCopy("src/../js");
    // eleventyConfig.addPassthroughCopy("src/../png");
    // eleventyConfig.addPassthroughCopy("src/../css");
    // eleventyConfig.addPassthroughCopy("src/../woff");
    // eleventyConfig.addPassthroughCopy("src/../woff2");
    // eleventyConfig.addPassthroughCopy("src/../ttf");
    // eleventyConfig.addPassthroughCopy("src/../zip");
    // eleventyConfig.addPassthroughCopy("src/../jpg");
    // eleventyConfig.addPassthroughCopy("src/../png");
    // eleventyConfig.addPassthroughCopy("src/../mp4");
    // eleventyConfig.addPassthroughCopy("src/../yml");

    eleventyConfig.addPassthroughCopy("src/**/*.{js,png,css,woff,woff2,ttf,zip,jpg,png,mp4,yml,}");

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

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }


};


