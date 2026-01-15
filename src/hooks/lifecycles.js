module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.blogTitle) {
      data.slug = data.blogTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // replace spaces/special chars with -
        .replace(/^-+|-+$/g, '');   // remove leading/trailing dashes
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.blogTitle) {
      data.slug = data.blogTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
  },
};
