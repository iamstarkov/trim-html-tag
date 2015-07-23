import { equal } from 'assert';
import trimTag from './index';

it('should trim p tag', () => {
  equal(trimTag('p', '<p> trimP </p>\n'), 'trimP');
});

it('should trim h1 tag', () => {
  equal(trimTag('h1', '<h1> trimH1 </h1>\n'), 'trimH1');
});
