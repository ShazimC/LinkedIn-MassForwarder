"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var fs = require("fs");
var list = [];
fs.readFile("names.txt", "utf-8", (err, data) => {
    list = data.split("\n");
    for (let i = 0; i < list.length; i++) {
        if (list[i].trim() === "")
            list.splice(i, 1);
    }
    //list.forEach((name) => console.log(name));
});
describe("Protractor Typescript Demo", () => __awaiter(void 0, void 0, void 0, function* () {
    beforeAll(() => {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.manage().window().maximize();
    });
    it("login", () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://www.linkedin.com/");
        yield protractor_1.element(protractor_1.by.css("a.nav__button-secondary")).click();
        yield protractor_1.browser.sleep(500);
        yield protractor_1.element(protractor_1.by.css("input#username")).sendKeys("shc77@scarletmail.rutgers.edu");
        yield protractor_1.element(protractor_1.by.css("input#password")).sendKeys("Supergogeta3000!");
        yield protractor_1.element(protractor_1.by.buttonText("Sign in")).click();
        //debugger;
    }));
    it("forward message to the list", () => __awaiter(void 0, void 0, void 0, function* () {
        for (let i = 0; i < list.length; i++) {
            yield protractor_1.browser.get("https://www.linkedin.com/messaging/thread/6667815975318032384/");
            yield protractor_1.browser.sleep(1000);
            yield protractor_1.browser
                .actions()
                .mouseMove(protractor_1.element(protractor_1.by.css(".msg-s-event-listitem__message-bubble")))
                .perform();
            yield protractor_1.browser.sleep(300);
            yield protractor_1.element(protractor_1.by.css(".msg-s-event-listitem__options-trigger.artdeco-dropdown__trigger.artdeco-dropdown__trigger--placement-top.ember-view")).click();
            yield protractor_1.browser.sleep(100);
            yield protractor_1.element(protractor_1.by.css("div[data-control-name='forward_to_message'")).click();
            // await browser.sleep(100);
            yield protractor_1.element(protractor_1.by.css(".mv1")).sendKeys(list[i]);
            yield protractor_1.browser.sleep(1000);
            yield protractor_1.element(protractor_1.by.css(".mv1")).sendKeys(protractor_1.protractor.Key.ENTER);
            // await browser.sleep(100);
            let sends = yield protractor_1.element.all(protractor_1.by.buttonText("Send"));
            yield sends[1].click();
            yield protractor_1.browser.sleep(200);
            yield console.log(list[i]);
        }
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBOEQ7QUFDOUQsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUksSUFBSSxHQUFrQixFQUFFLENBQUM7QUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQVksRUFBRSxFQUFFO0lBQ3RELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUNELDRDQUE0QztBQUM5QyxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7SUFDaEQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtRQUNyQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDL0MsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEtBQUss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