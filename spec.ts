import { browser, element, by, protractor } from "protractor";
var fs = require("fs");
var list: Array<string> = [];
fs.readFile("names.txt", "utf-8", (err, data: string) => {
  list = data.split("\n");
  for (let i = 0; i < list.length; i++) {
    if (list[i].trim() === "") list.splice(i, 1);
  }
  //list.forEach((name) => console.log(name));
});

describe("Protractor Typescript Demo", async () => {
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
  });
  it("login", async () => {
    await browser.get("https://www.linkedin.com/");
    await element(by.css("a.nav__button-secondary")).click();
    await browser.sleep(500);
    await element(by.css("input#username")).sendKeys("username");
    await element(by.css("input#password")).sendKeys("password");
    await element(by.buttonText("Sign in")).click();
    //debugger;
  });
  it("forward message to the list", async () => {
    for (let i = 0; i < list.length; i++) {
      await browser.get("link to the message in your messages");
      await browser.sleep(1000);
      await browser
        .actions()
        .mouseMove(element(by.css(".msg-s-event-listitem__message-bubble")))
        .perform();
      await browser.sleep(300);
      await element(
        by.css(
          ".msg-s-event-listitem__options-trigger.artdeco-dropdown__trigger.artdeco-dropdown__trigger--placement-top.ember-view"
        )
      ).click();
      await browser.sleep(100);
      await element(
        by.css("div[data-control-name='forward_to_message'")
      ).click();
      // await browser.sleep(100);
      await element(by.css(".mv1")).sendKeys(list[i]);
      await browser.sleep(1000);
      await element(by.css(".mv1")).sendKeys(protractor.Key.ENTER);
      // await browser.sleep(100);
      let sends: Array<any> = await element.all(by.buttonText("Send"));
      await sends[1].click();
      await browser.sleep(200);
      await console.log(list[i]);
    }
  });
});
