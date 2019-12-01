import { ServerResponse } from './server-response.model';

describe('ServerResponse model.', () => {
  it('00. Should create an instance.', () => {
    expect(new ServerResponse([{}, {}],
      '',
      '')).toBeDefined();
  });
});
