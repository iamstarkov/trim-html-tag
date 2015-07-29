const trim = input => input.trim();
const reg = /<([\S]{1,})[^>]*>([^\3]*)(<\/\1>)/gim;

export default (input = '') => trim(new RegExp(reg).exec(trim(input))[2]);
