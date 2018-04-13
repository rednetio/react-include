const chars = /[<>"]/g;
const replacements = { '<': '&lt;', '>': '&gt;', '"': '&quot;' };

const replace = char => replacements[char];
const sanitize = attr => attr.replace(chars, replace);

export default sanitize;
