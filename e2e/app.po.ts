import { browser, by, element } from 'protractor';

export class NextGenPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('next-gen-root h1')).getText();
  }
}
