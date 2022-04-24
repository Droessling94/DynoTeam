const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe ('MyNewManager', ()=>{

    it('should create a manager with the give information', () =>{
        const jimmy = new Manager('jimmy', 11 ,'jimmy@email', 1)
        expect(jimmy.name).toBe("jimmy");
        expect(jimmy.id).toBe(11);
        expect(jimmy.email).toBe('jimmy@email');
        expect(jimmy.officeNumber).toBe(1);
        expect(jimmy.role).toBe('Manager')
    });

    it('should get office number given myOfficeNumber method', ()=>{
        const jimmy = new Manager('jimmy', 11 ,'jimmy@email', 1);
        expect(jimmy.myOfficeNumber).toBe(1);
    });

    it('should get correct role when given myRole method', () =>{
        const jimmy = new Manager('jimmy', 11 ,'jimmy@email', 1);
        expect(jimmy.myRole).toBe("Manager")
    });




})