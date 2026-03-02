module.exports = function (eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Readable date: "January 15, 2025"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    const d = typeof dateObj === "string" ? new Date(dateObj) : dateObj;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  // ISO date: "2025-01-15"
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    if (!dateObj) return "";
    const d = typeof dateObj === "string" ? new Date(dateObj) : dateObj;
    return d.toISOString().split("T")[0];
  });

  // Compact date code: "20250115"
  eleventyConfig.addFilter("dateCode", (dateObj) => {
    if (!dateObj) return "00000000";
    const d = typeof dateObj === "string" ? new Date(dateObj) : dateObj;
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${y}${m}${day}`;
  });

  // Limit array to N items
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Change pathPrefix if deploying to a GitHub Pages project repo
    // e.g. "/my-portfolio/" for username.github.io/my-portfolio
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
