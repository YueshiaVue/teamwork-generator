const Team = require("../lib/Team");

describe("Team class", () => {
  describe("Initialization", () => {
    
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Team();
      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing a 'team' property when called with the 'new' keyword", () => {
      const obj = new Team();
      expect("team" in obj).toEqual(true);
    });

    it("should default 'team' to an empty array", () => {
      const obj = new Team();
      expect(obj.team.length).toEqual(0);
    });

  })
})