const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe ('MyNewEngineer', ()=>{

    it('should create a Engineer with the give information', () =>{
        const john = new Engineer('john', 12 ,'john@email','john@github')
        expect(john.name).toBe("john");
        expect(john.id).toBe(12);
        expect(john.email).toBe('john@email');
        expect(john.role).toBe('Engineer')
        expect(john.gitHub).toBe('john@github')
    });


    it('should get correct role when given myRole method', () =>{
        const john = new Engineer('john', 12 ,'john@email', 'john@github');
        expect(john.myRole).toBe("Engineer")
    });

    it('should get correct github when given myGitHub method', () =>{
        const john = new Engineer('john', 12 ,'john@email', 'john@github');
        expect(john.myGitHub).toBe("john@github")
    });


})