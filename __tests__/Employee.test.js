/* Tests
Check if we can create an employee object,✅
Check if we can assign a name to employee,✅
Check if we can assign an ID to employee,✅
Check if we can assign an Email to employee,✅
Check if we can get a name via getName() method,✅
Check if we can get a ID via getId() method,✅
Check if we can get a Email via getEmail() method,✅
Check if we can get a Role via getRole() method,✅
*/

const Employee = require("../lib/Employee");

describe("Employee", () => {

  describe("Init", () => {

    it("should be able to create an Employee object", () => {
      const testObj = new Employee();
      expect(typeof testObj).toBe("object");
    });

    it("should be able to set name, Id, and Email to the Employee Object", () => {
      const testObj = new Employee("testName", 1, "testEmail@email.com");
      expect(testObj.name).toBe("testName");
      expect(testObj.id).toBe(1);
      expect(testObj.email).toBe("testEmail@email.com");
    });
  });

  describe("getMethods", () => {
    const testObj = new Employee("testName", 1, "testEmail@email.com");

    it("Should return the objects name", () => {
      expect(testObj.getName()).toBe("testName");
    });
    it("Should return the objects id", () => {
      expect(testObj.getId()).toBe(1);
    });
    it("Should return the objects email", () => {
      expect(testObj.getEmail()).toBe("testEmail@email.com");
    });
    it("Should return the objects role", () => {
      expect(testObj.getRole()).toBe("Employee");
    });
  });
});
