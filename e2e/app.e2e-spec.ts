import { LearnFirebaseCloudFunctionPage } from './app.po';

describe('learn-firebase-cloud-function App', () => {
  let page: LearnFirebaseCloudFunctionPage;

  beforeEach(() => {
    page = new LearnFirebaseCloudFunctionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
