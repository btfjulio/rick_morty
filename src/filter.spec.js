const filter = require("./filter");
const data = require("./data/data.json");

describe("Filter", () => {
  describe("by Status", () => {
    it("return only alive", () => {
      const response = filter.filterByStatus(data.results, "Alive");
      expect(response.length).toBe(8);
    });
    it("return only dead", () => {
      const response = filter.filterByStatus(data.results, "Dead");
      expect(response.length).toBe(6);
    });
    it("return only unknown", () => {
      const response = filter.filterByStatus(data.results, "unknown");
      expect(response.length).toBe(6);
    });
  });
  describe("by gender", () => {
    it("return only mans", () => {
      const response = filter.filterByGender(data.results, "Male");
      expect(response.length).toBe(15);
    });
    it("return only female", () => {
      const response = filter.filterByGender(data.results, "Female");
      expect(response.length).toBe(4);
    });
    it("return only unknown", () => {
      const response = filter.filterByGender(data.results, "unknown");
      expect(response.length).toBe(1);
    });
  });
  describe("by episode", () => {
      it('return only Rick e Morty', () => {
          const response = filter.filterByEpisode(data.results, "1");
          expect(response.length).toBe(2)
          expect(response[1].name).toBe("Morty Smith");
      })
      it("Return episode 7 matchs", () => {
        const response = filter.filterByEpisode(data.results, "7");
        expect(response.length).toBe(5);
        expect(response[4].name).toBe("Jerry Smith");
      });
  })
});
