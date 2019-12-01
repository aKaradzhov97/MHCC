import { Job } from './job.model';

describe('Job model.', () => {
  it('00. Should create Job instance.', () => {
    expect(new Job('1',
      'Software developer',
      '10112', 'Berlin',
      'https://google.bg/',
      ['a', 'b'], {}, true,
      [{}],
      'active',
      'lipsum',
      new Date(),
      new Date())).toBeDefined();
  });
});
