import { LoansProjectPage } from './app.po';

describe('loans-project App', () => {
  let page: LoansProjectPage;

  beforeEach(() => {
    page = new LoansProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
