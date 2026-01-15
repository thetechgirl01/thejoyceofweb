module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.blogTitle) {
      data.slug = data.blogTitle
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-') // replace spaces and special chars with '-'
        .replace(/^-+|-+$/g, '');    // remove leading/trailing '-'
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.blogTitle) {
      data.slug = data.blogTitle
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
  },
};
