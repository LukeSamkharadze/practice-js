function rmHtmlTags(string) {
  if (typeof string !== 'string')
    throw new Error("Parameter must be a string");

  return string.replace(/<[^>]*>/ig, "");
}

console.log(rmHtmlTags('<p><strong><em>Content</em></strong></p>'));