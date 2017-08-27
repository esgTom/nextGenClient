import { NextGenPage } from './app.po';

describe('next-gen App', () => {
  let page: NextGenPage;

  beforeEach(() => {
    page = new NextGenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to next-gen!');
  });
});
