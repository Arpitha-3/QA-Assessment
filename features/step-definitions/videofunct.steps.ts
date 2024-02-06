import { Given, When } from '@wdio/cucumber-framework';

Given(/^I am on the browser and load the url (.*)$/, async function(homepage) {
    await browser.url(homepage)
    await browser.maximizeWindow()
});

When(/^I Accept cookies$/, async () => {
    $('.button_cVc76.primary_vX6Hs').click();
    // await browser.pause(50000)
});

When(/^I need to click on Play button$/, async () => {
    // await browser.pause(20000)
    $('.vjs-play-control.vjs-control').click();
    await browser.pause(7000)
    $('.vjs-play-control.vjs-control').click();
    await browser.pause(15000)
    $('.vjs-play-control.vjs-control').click();
    await browser.pause(5000)
});

When(/^I should click on Forward button$/, async () => {
    $('.mol-skip-control.vjs-control').click()
    await browser.pause(5000)

});

When(/^I should click on Backward button$/, async () => {
    $('.mol-previous-control.vjs-control').click()
    await browser.pause(15000)

});

When(/^I need to click on Mute button$/, async () => {
    $('.vjs-volume-menu-button.vjs-menu-button.vjs-control.vjs-vol-3').click()
    await browser.pause(5000)
    $('.vjs-volume-menu-button.vjs-menu-button.vjs-control.vjs-vol-0').click()
    await browser.pause(15000)
});