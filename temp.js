const playerList = [
  {
    name: "Virat Kohli",
    playingRole: "Batsman",
    credit: 10
  },
  {
    name: "Jasprit Bumrah",
    playingRole: "Bowler",
    credit: 12
  },
  {
    name: "Rohit Sharma",
    playingRole: "Batsman",
    credit: 11
  }];

  
let member = playerList.find((player) => player.name === "Rohit Sharma");

playerList.pop();

playerList.push({
  name: "Rohit Sharma",
  playingRole: "Batsman",
  credit: 11
});

const op = playerList.includes(member);

console.log(op)

