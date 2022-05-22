const Spiderman = require('../app/spiderman');


describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spider object', () => {
      const andrewGarfiel = new Spiderman ("Spiderman Sony",31,"Andrew Garfield",2,"Sony")
      expect(andrewGarfiel.name).toBe("Spiderman Sony");
      expect(andrewGarfiel.age).toBe(31);
      expect(andrewGarfiel.actor).toBe("Andrew Garfield");
      expect(andrewGarfiel.movies).toBe(2);
      expect(andrewGarfiel.studio).toBe("Sony");
    });
  })

  describe("Unit Tests for Spiderman class", () => {
    test('2) Use the method getInfo', () => {
      const tomHolland = new Spiderman ("Spiderman Marvel",25,"Tom Holland",5,"Marvel")
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
     
    });
  })