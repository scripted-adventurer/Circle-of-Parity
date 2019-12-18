class TeamNode {
  constructor(teamId) {
    this.id = teamId;
    this.winsList = [];
    this.winsListIndex = 0;
    this.start = false;
    this.parent = '';
    this.child = '';
  }
  findChild(graphLen) {
    for (; this.winsListIndex < this.winsList.length; this.winsListIndex++) {
      let team = this.winsList[this.winsListIndex];
      // start node can only be selected by the last (32nd) node
      if (graphLen != 32) {
        var selectable = (team.parent == '' && team.start == false);
      }
      else {
        var selectable = (team.parent == '');
      }
      // if the team is not already on the path, use it, otherwise keep going
      if (selectable) {
        team.parent = this;
        this.child = team;
        this.winsListIndex++;
        return {'next': this.child, 'length': 1};
      }
    }
    // if all possibilities are exhausted, go up a level and try a different team
    let next = this.parent;
    this.winsListIndex = 0;
    this.parent = '';
    this.child = '';
    return {'next': next, 'length': -1};
  }
}