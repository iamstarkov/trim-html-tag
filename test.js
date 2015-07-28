import { equal } from 'assert';
import trimTag from './index';

it('should trim p tag', () => {
  equal(trimTag('<p> trimP </p>\n'), 'trimP');
});

it('should trim h1 tag', () => {
  equal(trimTag('<h1> trimH1 </h1>\n'), 'trimH1');
});

it('should trim anything tag', () => {
  equal(trimTag('<h1 class="asd"> trimH1 </h1>\n'), 'trimH1');
});
