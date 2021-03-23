const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Init", () => {
    it("should be able to create an Engineer object", () => {
      const testObj = new Engineer();
      expect(typeof testObj).toBe("object");
    });

    it("should be able to set name, Id, Email and Github to the Engineer Object", () => {
      const testObj = new Engineer(
        "testName",
        1,
        "testEmail@email.com",
        "testGithub"
      );

      expect(testObj.name).toBe("testName");
      expect(testObj.id).toBe(1);
      expect(testObj.email).toBe("testEmail@email.com");
      expect(testObj.github).toBe("testGithub");
    });

    describe("getMethods", () => {
      const testObj = new Engineer(
        "testName",
        1,
        "testEmail@email.com",
        "testGithub"
      );

      it("Should return the objects name", () => {
        expect(testObj.getName()).toBe("testName");
      });
      it("Should return the objects id", () => {
        expect(testObj.getId()).toBe(1);
      });
      it("Should return the objects email", () => {
        expect(testObj.getEmail()).toBe("testEmail@email.com");
      });
      it("should return the objects github", () => {
        expect(testObj.getGithub()).toBe("testGithub");
      });
      it("Should return the objects role", () => {
        expect(testObj.getRole()).toBe("Engineer");
      });
    });
  });
});
