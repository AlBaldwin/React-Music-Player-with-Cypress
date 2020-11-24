describe("Launch the music player app to test the default state and library component", () => {
  before(() => {
    cy.visit("/");
    cy.waitForReact(1000, "#root");
  });

  describe("Check the music player launch state", () => {
    it("Elements are loaded", () => {
      cy.contains("Waves").should("be.visible");
      cy.contains("Library").should("be.visible");
      cy.contains("Beaver Creek").should("be.visible");
      cy.contains("Aso, Middle School, Aviino").should("be.visible");
      cy.get(".player").should("be.visible");
    });

    it("The song conatiner is loaded", () => {
      cy.get(".song-container > h2").contains("Beaver Creek");
      cy.get(".song-container > h3").contains("Aso, Middle School, Aviino");
      cy.get(".time-control > :nth-child(1)").contains("0:00");
      cy.get(".time-control > :nth-child(3)").contains("2:17");
    });

    it("The sideBar container is not visible", () => {
      cy.get(".library-songs").should("not.be.visible");
    });

    it("The sideBar songs are not visible on launch", () => {
      cy.contains("Daylight").should("not.be.visible");
      cy.contains("Keep Going").should("not.be.visible");
      cy.contains("Nightfall").should("not.be.visible");
      cy.contains("Reflection").should("not.be.visible");
      cy.contains("Under the City Stars").should("not.be.visible");
      cy.contains("Dancing Droplets").should("not.be.visible");
      cy.contains("Foggy Road").should("not.be.visible");
    });
  });

  describe("Expand the sidebar", () => {
    it("Click the library button", () => {
      cy.get("button").click();
    });

    it("The sideBar container is visible", () => {
      cy.get(".library-songs").should("be.visible");
    });

    it("The songs Daylight is visible within the sidebar", () => {
      cy.wait(1000);
      cy.contains("Daylight").should("be.visible");
    });

    it("The song Keep Going is visible within the sidebar", () => {
      cy.contains("Keep Going").should("be.visible");
    });

    it("The song Nightfall is visible within the sidebar", () => {
      cy.contains("Nightfall").should("be.visible");
    });

    it("The song Reflection is visible within the sidebar", () => {
      cy.contains("Reflection").should("be.visible");
    });

    it("Scroll to the bottom of the sidebar", () => {
      cy.contains("Foggy Road").scrollIntoView();
    });

    it("The song Under the City Stars is visible within the sidebar", () => {
      cy.contains("Under the City Stars").should("be.visible");
    });

    it("The song Dancing Droplets is visible within the sidebar", () => {
      cy.contains("Dancing Droplets").should("be.visible");
    });

    it("The song Foggy Road is visible within the sidebar", () => {
      cy.contains("Foggy Road").should("be.visible");
    });
  });

  describe("Select a song from the sidebar", () => {
    it("Click Foggy Raod", () => {
      cy.get(".library-songs > :nth-child(8)").click();
    });

    it("Foggy Road song is selected in the player", () => {
      cy.getReact("Song", {
        props: {
          currentSong: {},
        },
      }).getProps("currentSong.name").should("eq", "Foggy Road");
    });

    it("Pause the song", () => {
      cy.get(".fa-play").click();
      cy.get(".fa-play").should("not.be.visible");
      cy.get(".fa-pause").should("be.visible");
    });
  });
});
