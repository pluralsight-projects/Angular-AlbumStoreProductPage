import { AlbumStorePage } from './app.po';

describe('album-store App', () => {
  let page: AlbumStorePage;

  beforeEach(() => {
    page = new AlbumStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
