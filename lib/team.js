class Team {
    constructor(name, team = []){
      this.name = name;
      this.team = team;
    }
  
    addToTeam(employee){
      this.team.push(employee)
    }

    getTeam() {
       return this.team;
    }

  }
  
  module.exports = Team;