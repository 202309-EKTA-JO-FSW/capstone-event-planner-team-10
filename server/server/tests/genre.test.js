const Genre = require("../models/genre");

describe("Genre Model", () => {
  it("should create a new genre successfully", () => {
    const genreData = {
      name: "Action",
    };

    const genre = new Genre(genreData);
    const error = genre.validateSync();

    expect(error).toBeUndefined();
    expect(genre.name).toBe(genreData.name);
  });

  it("should fail to create a genre without a name", () => {
    const genreData = {};

    const genre = new Genre(genreData);
    const error = genre.validateSync();

    expect(error).toBeDefined();
    expect(error.errors.name).toBeDefined();
  });
});
