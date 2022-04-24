const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,gitHub,){
        super(name,id,email),
        this.gitHub = gitHub,
        this.role = 'Engineer'

    }

    get myGitHub() {
        return this.getGitHub()
    }
        getGitHub(){
            return this.gitHub
        }
    
};

module.exports = Engineer;