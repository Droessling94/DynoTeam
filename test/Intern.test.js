const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe ('MyNewIntern', ()=>{

    it('should create a Intern with the give information', () =>{
        const jacob = new Intern('jacob', 13 ,'jacob@email','st.auggie')
        expect(jacob.name).toBe("jacob");
        expect(jacob.id).toBe(13);
        expect(jacob.email).toBe('jacob@email');
        expect(jacob.role).toBe('Intern')
        expect(jacob.school).toBe('st.auggie')
    });


    it('should get correct role when given myRole method', () =>{
        const jacob = new Intern('jacob', 13 ,'jacob@email', 'st.auggie');
        expect(jacob.myRole).toBe("Intern")
    });

    it('should get correct school when given mySchool method', () =>{
        const jacob = new Intern('jacob', 13 ,'jacob@email', 'st.auggie');
        expect(jacob.mySchool).toBe("st.auggie")
    });


})