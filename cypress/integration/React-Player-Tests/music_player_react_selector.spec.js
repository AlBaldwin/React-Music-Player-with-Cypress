describe("Launch the Wave React Player website", () => {
  it("Default song is set", () => {
    cy.visit("http://localhost:3000/");
    cy.waitForReact(1000, "#root");
    cy.react("Nav", { props: { libraryStatus: false } });
    cy.react(
      "Song",
      {
        props: {
          currentSong: {
            artist: "Aso, Middle School, Aviino",
            active: true,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#205950", "#2ab3bf"],
            name: "Beaver Creek",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
          },
        },
      },
    );
  });
});
