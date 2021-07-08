class Team {
    constructor(name, team = []){
      this.name = name;
      this.team = team;
    }
  
    addToTeam(employee){
      this.team.push(employee)
    }
  }
  
  module.exports = Team;