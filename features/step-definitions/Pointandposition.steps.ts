import { Given, When } from '@wdio/cucumber-framework';

Given(/^I am on the browser and load the url (.*)$/, async function(homepage) {
    await browser.url(homepage)
    await browser.maximizeWindow()
});

When(/^I Accept cookies$/, async () => {
    $('.button_cVc76.primary_vX6Hs').click();
    // await browser.pause(50000)
});

When(/^I need to click on Sport Tab$/, async () => {
    // await browser.pause(20000)
    const sportTab = await $('li.sport a'); // Using a simplified selector
        // Log a message before waiting for clickable
        console.log('Before waiting for Sport Tab to be clickable');

         // Wait for the element to exist and be displayed
        await sportTab.waitForExist({ timeout: 30000 }); // 30 seconds
        await sportTab.waitForDisplayed({ timeout: 30000 });
  
        // Log a message after waiting
        console.log('After waiting for Sport Tab to be clickable');

    // Click on the Sport Tab
    await sportTab.click();
        // Wait for a specific element on the new page to exist, indicating that the page has loaded
    const someElementOnNewPage = await $('#sport');
    await someElementOnNewPage.waitForExist({ timeout: 60000 });
    await $('.button_cVc76.primary_vX6Hs').click();
});

When(/^I need to click on column tab$/, async () => {
    const tablesTab = await $('.tabs_1UkK9 a.tab_1LRzC[href="/sport/football/premier-league/tables.html"]');
    // Wait for the element to be clickable
    await tablesTab.waitForClickable({ timeout: 120000 });
    console.log('After waiting waiting for Sport Tab to be clickable');
   await browser.execute((element) => {
            console.log('Before checking clickable state');
            element.scrollIntoView({ behavior: 'smooth' });
            console.log('After checking clickable state');
    }, tablesTab);
//     // Click on the "Tables" tab
    await tablesTab.click();
    // await $('.button_cVc76.primary_vX6Hs').click();
    const someElementOnNewPage = await $('.heading_Tkzv5.displayMode-medium_3Osec');
    await someElementOnNewPage.waitForExist({ timeout: 60000 });
});

    When('I search for the points of the team {string}', async function (teamName: string) {
    // Store the team name in the context or any other suitable way
    this.teamName = teamName;

    // Call the function to get points for the specified team
    this.points = await getPointsForTeam(teamName);
    console.log(this.points);
});

async function getPointsForTeam(teamName: string): Promise<string | null> {
    try {
        // Find the row corresponding to the provided team name
        const teamRow: Element | null = await browser.$(`.team_1zTYu:contains('${teamName}')`).parent('tr').filter(':first');

        // Check if the teamRow is found
        if (teamRow) {
            // Extract the points value from the team row
            const pointsElement = await teamRow.$('.score-pts_TNAV7');

            if (pointsElement) {
                const points = await pointsElement.getText();
                return points;
            } else {
                // Points element not found
                console.error('Points element not found for team:', teamName);
                return null;
            }
        } else {
            // Team not found
            console.error('Team not found:', teamName);
            return null;
        }
    } catch (error) {
        // Handle any errors that might occur during the process
        console.error('Error:', error.message);
        return null;
    }
}







