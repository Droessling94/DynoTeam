class Employee {
    constructor(name,id,email){
        this.name = name,
        this.id = id,
        this.email = email
        this.role = 'Employee'
    }

    get myName() {
        return this.getName();
    }

        getName(){
            return this.name
        }

    get myId() {
        return this.getId();
    }

        getId() {
            return this.id
        }

    get myEmail() {
        return this.getEmail();
    }
        
        getEmail() {
            return this.email;
        }

    get myRole() {
        return this.getRole();
    }

        getRole() {
            return this.role;
        }
    
        
}

module.exports = Employee;