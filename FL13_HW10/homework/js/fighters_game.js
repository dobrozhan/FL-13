class Fighter {
  constructor(obj) {
          let name = obj.name;
          let damage = obj.damage;
          let hp = obj.hp;
          let strength = obj.strength;
          let agility = obj.agility;
          let wins = 0;
          let losses = 0;

          this.getName = () => name;
          this.getDamage = () => damage;
          this.getStrength = () => strength;
          this.getAgility = () => agility;
          this.attack = (defender) => {
              const RANDOM = 101; 
              let probability = strength + agility;
              let random = Math.floor(Math.random()*RANDOM);
              random > probability ? 
              (this.dealDamage(defender.getDamage()), 
              console.log(`${defender.getName()} makes ${defender.getDamage()} damage to ${this.getName()}`)) 
              : console.log(`${defender.getName()} attack missed`);
            };
          this.getHealth = () => hp;
          this.heal = (addhp) => { 
              hp + addhp > obj.hp ? hp = obj.hp : hp += addhp 
          };
          this.dealDamage = (subhp) => { 
              hp - subhp < 0 ? hp = 0 : hp -= subhp 
          };
          this.logCombatHistory = () => console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
          this.addWin = () => ++wins;
          this.addLoss = () => ++losses;
      }
}

const fighter1 = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15}); 
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20}); 

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
      console.log(`${fighter1.getName()} is dead and can't fight`);
      return;
  } else if (fighter2.getHealth() === 0) {
      console.log(`${fighter2.getName()} is dead and can't fight`);
      return;
  }

  do {
  fighter1.attack(fighter2); 
  if (fighter2.getHealth() === 0) {
      console.log(`${fighter1.getName()} has won`);
      fighter1.addWin();
      fighter2.addLoss();
      return;
  }
  fighter2.attack(fighter1);
  if (fighter1.getHealth() === 0) {
      console.log(`${fighter2.getName()} has won`);
      fighter2.addWin();
      fighter1.addLoss();
      return;
  }
 } while (fighter1.getHealth() || fighter2.getHealth() !== 0);
}