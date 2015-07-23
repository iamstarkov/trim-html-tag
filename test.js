import { equal } from 'assert';
import trimHtmlTag from './index';

it('should trimHtmlTag', () => {
  equal(trimHtmlTag('unicorns'), 'unicorns');
});
