import { OutsideInPage } from './app.po';

describe('outside-in App', () => {
  let page: OutsideInPage;

  beforeEach(() => {
    page = new OutsideInPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to oi!!');
  });
});
