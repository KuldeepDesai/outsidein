import { browser, by, element } from 'protractor';

export class OutsideInPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('oi-root h1')).getText();
  }
}
