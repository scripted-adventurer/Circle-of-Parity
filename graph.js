class Graph {
  constructor(year) {
    // seasonResults defined in season_results.js
    this.results = seasonResults[year];
    this.graph = {};
    this.graphLen = 0;
    this.start = '';
    this.addTeams();
    this.addWinsLists();
    //this.sortWinsLists();
  }
  addTeams() {
    Object.keys(this.results).forEach(team => this.graph[team] = new TeamNode(team));
  }
  addWinsLists() {
    let teams = Object.keys(this.results);
    for (let teamsIndex = 0; teamsIndex < teams.length; teamsIndex++) {
      let team = teams[teamsIndex];
      for (let winsIndex = 0; winsIndex < this.results[team].length; winsIndex++) {
        let opponent = this.results[team][winsIndex];
        this.graph[team].winsList.push(this.graph[opponent]);
      }
    }
  }
  sortWinsLists() {
    // sort each win list by the number of wins each opponent has, descending
    // this heuristic (picking better teams first) improves execution time
    let teams = Object.keys(this.graph);
    for (let teamsIndex = 0; teamsIndex < teams.length; teamsIndex++) { 
      let team = teams[teamsIndex];
      this.graph[team].winsList.sort(function(teamA, teamB) {
        return teamB.winsList.length - teamA.winsList.length;
      });
    }
  }
  findStart() {
    // start with the team with the fewest wins
    let startTeam = '';
    let fewestWins = 16;
    let teams = Object.keys(this.graph);
    for (let teamsIndex = 0; teamsIndex < teams.length; teamsIndex++) {
      let team = this.graph[teams[teamsIndex]];
      if (team.winsList.length < fewestWins) {
        startTeam = team.id;
        fewestWins = team.winsList.length;
      }
    }
    this.graph[startTeam].start = true;
    this.start = this.graph[startTeam];
    this.graphLen = 1;
  }
  findPath() {
    let activeNode = this.start;
    // if activeNode is null, all combinations were exhausted and no circle of parity
    // is possible for this graph
    // if the path length is 32 and the end's child node is the start node, path is complete
    while (activeNode && this.graphLen <= 32 && activeNode.child.start != true) {
      let response = activeNode.findChild(this.graphLen);
      this.graphLen += response.length;
      activeNode = response.next;
      if (this.graphLen == 32) {
      }
    }
  }
  getPath() {
    let path = [];
    let node = this.start;
    path.push(node.id);
    if (node.child == '') {
      return '';
    }
    while (!node.child.start) {
      node = node.child;
      path.push(node.id);
    }
    return path;
  }
}