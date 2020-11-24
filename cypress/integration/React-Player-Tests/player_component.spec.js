describe("Launch the music player app", () => {
  before(() => {
    cy.visit("/");
    cy.waitForReact(1000, "#root");
  });

  describe("Player component default song", () => {
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

    it("When song is playing the pause button is visible", () => {
      cy.get(".fa-pause").should("be.visible");
    });

    it("Press pause and the song is paused", () => {
      cy.get(".fa-pause").click();
      cy.getReact("Player", {
        props: { isPlaying: false },
      })
        .getProps("isPlaying")
        .should("eq", false);
    });

    it("When song is paused the play button is visible", () => {
      cy.get(".play").should("be.visible");
    });
  });

  describe("Next song when the previous song was paused", () => {
    it("Press next song icon", () => {
      cy.get(".fa-angle-right").click();
    });

    it("Daylight song is selected", () => {
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.name").should("eq", "Daylight");
    });

    it("The song is paused", () => {
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

  describe("Next song when the previous song was playing", () => {
    it("Press next song icon", () => {
      cy.get(".fa-angle-right").click();
    });

    it("Keep Going song is selected", () => {
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.name").should("eq", "Keep Going");
    });

    it("The song is playing", () => {
      cy.getReact("Player", {
        props: { isPlaying: true },
      })
        .getProps("isPlaying")
        .should("eq", true);
    });
  });

  describe("previous song when the current song was playing", () => {
    it("Press previous song icon", () => {
      cy.get(".fa-angle-left").click();
    });

    it("Daylight song is selected", () => {
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.name").should("eq", "Daylight");
    });

    it("The song is playing", () => {
      cy.getReact("Player", {
        props: { isPlaying: true },
      })
        .getProps("isPlaying")
        .should("eq", true);
    });
  });
});
