const Location = require("../models/location");

describe("Location Model", () => {
  it("should create a new location successfully", () => {
    const locationData = {
      title: "Central Park",
    };

    const location = new Location(locationData);
    const error = location.validateSync();

    expect(error).toBeUndefined();
    expect(location.title).toBe(locationData.title);
  });

  it("should fail to create a location without a title", () => {
    const locationData = {};

    const location = new Location(locationData);
    const error = location.validateSync();

    expect(error).toBeDefined();
    expect(error.errors.title).toBeDefined();
  });
});
