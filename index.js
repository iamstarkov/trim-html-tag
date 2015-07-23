import { compose, trim, join, split, nthArg, filterIndexed } from 'ramda';

const isInRange = (start, end) =>
  (item, i, arr) => i > start && i < arr.length - 1 - end;
const trimTag = tag => filterIndexed(isInRange(tag.length + 1, tag.length + 2));
const _trim = tag => compose(trim, join(''), trimTag(tag), split(''), trim);

export default (tag, input = '') => _trim(tag)(input);
