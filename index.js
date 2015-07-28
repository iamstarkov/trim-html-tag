const trim = input => input.trim();
const reg = /<[\S]{1,}[^>]*>([^<]*)<\/[\S]{1,}>/gim;

export default (input = '') => trim(new RegExp(reg).exec(trim(input))[1]);
