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
