const Employee = require('../lib/Employee')

describe ('MyNewEmployee', ()=> {

    it('is created with a name id and email', () =>{
        const james = new Employee("james",10,"james@email");

        expect(james.name).toBe("james");
        expect(james.id).toBe(10);
        expect(james.email).toBe('james@email');
    });

    it('should print name given myName method', ()=>{
        const james = new Employee("james",10,"james@email");
        expect(james.myName).toBe("james");

    });

    it('should print id given myId method', ()=>{
        const james = new Employee("james",10,"james@email");
        expect(james.myId).toBe(10);

    });

    it('should print email given myEmail method', ()=>{
        const james = new Employee("james",10,"james@email");
        expect(james.myEmail).toBe("james@email");

    });

    it('should print employee role given myRole method', ()=>{
        const james = new Employee("james",10,"james@email");
        expect(james.myRole).toBe("Employee");

    });


})