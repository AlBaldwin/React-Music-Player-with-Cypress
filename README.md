## This project is still under development ##

# React Music Player App with Cypress Testing

I built this React music player app in a react Dev camp course I recently enrolled in. I have added a test framework using Cypress to experiment with the cypress react-selector library. 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run cypress open` - `npx cypress open`

Opens Cypress from the project

### cypress react-selectors examples

```
describe("Use the cypress react-selector library to validate components, props and state of the react music player", () => {
  describe("Hooks", () => {
    before(() => {
      cy.visit("/");
      cy.waitForReact(1000, "#root");
    });

//Gets song name from the current song using the cypress react-selectors
    it("Default song name Beaver Creek is set", () => {
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.name").should("eq", "Beaver Creek");
    });

//validate the song is playing via the Player components isPlaying props
    it("Press the play icon and the song plays", () => {
      cy.get(".play").click();
      cy.getReact("Player", {
        props: { isPlaying: true },
      })
        .getProps("isPlaying")
        .should("eq", true);
    });
  });
});
```
