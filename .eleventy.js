
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("mission", function(day, location) {
    return `<div class="mission">
<div class="day">${day}</div>
<div class="location">${location}</div>
</div>`;
  });
};