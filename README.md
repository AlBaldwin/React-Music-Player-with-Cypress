# Getting Started with Create React App

This React player website was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and built via a Dev camp course

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run cypress open` - `npx cypress open`

Opens Cypress from the project

```
describe("Check default song props/state", () => {
  describe("Hooks", () => {
    before(() => {
      cy.visit("/");
      cy.waitForReact(1000, "#root");
    });

    it("Default song Beaver Creek is active", () => {
      cy.react("Nav", { props: { libraryStatus: false } });
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.active").should("eq", true);
    });

    it("Default song name Beaver Creek is set", () => {
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.name").should("eq", "Beaver Creek");
    });

    it("Default artist Aso, Middle School, Aviino is set ", () => {
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.artist").should(
        "eq",
        "Aso, Middle School, Aviino",
      );
    });

    it("Audio link is set for Beaver Creek ", () => {
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.audio").should(
        "eq",
        "https://mp3.chillhop.com/serve.php/?mp3=10075",
      );
    });

    it("Player is not playing", () => {
      cy.getReact("Player", {
        props: { isPlaying: false },
      })
        .getProps("isPlaying")
        .should("eq", false);
    });
  });
});
```
