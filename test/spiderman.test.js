
const Spiderman = require("./../app/spiderman")
describe("Test Suite Dummy Description", ()=>{
    test('1) Create an spiderman object',() =>{
        // Paso uno para TDD.
        const tomHolland= new Spiderman("Spiderman Sony",31,"Andrew Garfield",3,'Sony')
        expect(tomHolland.name).toBe('Spiderman Sony')
        expect(tomHolland.age).toBe(31)
        expect(tomHolland.actor).toBe('Andrew Garfield')
        expect(tomHolland.movies).toBe(3)
        expect(tomHolland.studio).toBe('Sony')
    })
})