import {createCharacter} from './models/character.js';
import {createAction} from './models/action.js';

const player = createCharacter("Player", 30);
player.actions.push(createAction("Strike", {attack: 5}));
player.actions.push(createAction("Defend", {defend: 5}));
player.actions.push(createAction("Attack/Defend", {attack: 3, defend: 3}));

const enemy = createCharacter("Enemy", 10);
enemy.actions.push(createAction("Strike", {attack: 10}));
enemy.actions.push(createAction("Nothing", {}));

const displayStats = () => {
  console.log("Player health: " + player.health);
  console.log("Enemy health: " + enemy.health);
};

const performAction = (subject, object, action) => {
  if (action.defend)
    subject.health += action.defend;
  if (action.attack)
    object.health -= action.attack;
};

const chooseRandomAction = (subject) => {
  return subject.actions[Math.floor(Math.random() * subject.actions.length)];
}

const takeTurn = (object, subject) => {
  console.log(object.name + "'s turn:");

  const randAction = chooseRandomAction(object);
  console.log(randAction);
  performAction(player, subject, randAction);

  displayStats();
}

displayStats();

while (player.health > 0 && enemy.health > 0) {
  takeTurn(player, enemy);
  takeTurn(enemy, player);
}

if (player.health <= 0) {
  console.log("You lose!");
} else if (enemy.health <= 0) {
  console.log("You win!");
}
