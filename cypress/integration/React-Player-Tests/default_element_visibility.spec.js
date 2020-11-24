describe("Launch the music player app", () => {
  before(() => {
    cy.visit("/");
    cy.waitForReact(1000, "#root");
  });

  describe("Check launch state", () => {
    it("Elements are loaded", () => {
      cy.contains("Waves").should("be.visible");
      cy.contains("Library").should("be.visible");
      cy.contains("Beaver Creek").should("be.visible");
      cy.contains("Aso, Middle School, Aviino").should("be.visible");
      cy.get(".player").should("be.visible");
    });

    it("Song conatiner is loaded", () => {
      cy.get(".song-container > h2").contains("Beaver Creek");
      cy.get(".song-container > h3").contains("Aso, Middle School, Aviino");
      cy.get(".time-control > :nth-child(1)").contains("0:00");
      cy.get(".time-control > :nth-child(3)").contains("2:17");
    });

    it("SideBar container is not visible", () => {
      cy.get(".library-songs").should("not.be.visible");
    });

    it("SideBar songs are not visible on launch", () => {
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

    it("SideBar container is visible", () => {
      cy.get(".library-songs").should("be.visible");
    });

    it("Songs are visible within the sidebar", () => {
      cy.wait(1000);
      cy.contains("Daylight").should("be.visible");
      cy.contains("Keep Going").should("be.visible");
      cy.contains("Nightfall").should("be.visible");
      cy.contains("Reflection").should("be.visible");
      cy.contains("Foggy Road").scrollIntoView();
      cy.contains("Under the City Stars").should("be.visible");
      cy.contains("Dancing Droplets").should("be.visible");
      cy.contains("Foggy Road").should("be.visible");
    });
  });
});
