## This project is still under development

# React Music Player App with Cypress Testing

This React music player app was built as a project in a React Dev camp course I recently enrolled in.
I have added a test framework using Cypress to experiment with so i can have a better understanding of reacts JSX, Components, props and state using the cypress react-selector library.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run cypress open` - `npx cypress open`

Opens Cypress from the proje

### cypress react-selectors examples

```
describe("Launch the music player app", () => {
  before(() => {
    cy.visit("/");
    cy.waitForReact(1000, "#root");
  });

  describe("Check and play default song", () => {
    it("Default song is active", () => {
      cy.react("Nav", { props: { libraryStatus: false } });
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.active").should("eq", true);
    });

    it("Default song name is Beaver Creek", () => {
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.name").should("eq", "Beaver Creek");
    });


    it("Press play and the song plays", () => {
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
