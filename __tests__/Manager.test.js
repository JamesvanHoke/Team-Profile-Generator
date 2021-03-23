const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Init", () => {
    it("should be able to create an Manager object", () => {
      const testObj = new Manager();
      expect(typeof testObj).toBe("object");
    });

    it("should be able to set name, Id, Email and Office Number to the Manager Object", () => {
      const testObj = new Manager(
        "testName",
        1,
        "testEmail@email.com",
        101
      );

      expect(testObj.name).toBe("testName");
      expect(testObj.id).toBe(1);
      expect(testObj.email).toBe("testEmail@email.com");
      expect(testObj.officeNumber).toBe(101);
    });

    describe("getMethods", () => {
      const testObj = new Manager(
        "testName",
        1,
        "testEmail@email.com",
        101
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
      it("should return the objects Office Number", () => {
        expect(testObj.getOfficeNumber()).toBe(101);
      });
      it("Should return the objects role", () => {
        expect(testObj.getRole()).toBe("Manager");
      });
    });
  });
});