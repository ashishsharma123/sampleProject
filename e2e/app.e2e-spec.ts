import { SampleProjectPage } from './app.po';

describe('sample-project App', () => {
  let page: SampleProjectPage;

  beforeEach(() => {
    page = new SampleProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
