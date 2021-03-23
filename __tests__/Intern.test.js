const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Init", () => {
    it("should be able to create an Intern object", () => {
      const testObj = new Intern();
      expect(typeof testObj).toBe("object");
    });

    it("should be able to set name, Id, Email and School to the Intern Object", () => {
      const testObj = new Intern(
        "testName",
        1,
        "testEmail@email.com",
        "testSchool"
      );

      expect(testObj.name).toBe("testName");
      expect(testObj.id).toBe(1);
      expect(testObj.email).toBe("testEmail@email.com");
      expect(testObj.school).toBe("testSchool");
    });

    describe("getMethods", () => {
      const testObj = new Intern(
        "testName",
        1,
        "testEmail@email.com",
        "testSchool"
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
      it("should return the objects School", () => {
        expect(testObj.getSchool()).toBe("testSchool");
      });
      it("Should return the objects role", () => {
        expect(testObj.getRole()).toBe("Intern");
      });
    });
  });
});
