const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');

class Game {
  constructor(name) {
    this.monster = null;
    this.hero = null;
    this.monsterList = [
      {name : '슬라임', hp : 25, att : 10, xp : 10},
      {name : '스켈레톤', hp : 50, att : 15, xp : 20},
      {name : '마왕', hp : 150, att : 35, xp : 50}
    ];
    this.start();
  }
  start() {
    $gameMenu.addEventListener('submit', this.onGameMenuInput);
    $battleMenu.addEventListener('submit', this.onBattleMenuInput);
    this.changeScreen('game');
  }
  changeScreen(screen) {
    if (screen === 'start') {
      $startScreen.style.display = 'block';
      $gameMenu.style.display = 'none';
      $battleMenu.style.display = 'none';
    } else if (screen === 'game') {
      $startScreen.style.display = 'none';
      $gameMenu.style.display = 'block';
      $battleMenu.style.display = 'none';
    } else if (screen === 'battle') {
      $startScreen.style.display = 'none';
      $gameMenu.style.display = 'none';
      $battleMenu.style.display = 'block';
    }
  }
  onGameMenuInput = (event) => {
    event.preventDefault();
    const input = event.target['menu-input'].value;
    if (input === '1') {
      this.changeScreen('battle');
    } else if (input === '2') {

    } else if (input === '3') {
      
    }
  }
}

class Hero = {
  constructor(game, name) {
    this.game = game;
    this.name = name;
    this.lev = 1;
    this.maxHp = 100;
    this.hp = 100;
    this.xp = 0;
    this.att = 10;
  } 
  attack(target) {
    target.hp -= this.att;
  }
  heal(monster) {
    this.hp += 20;
    this.hp -= monster.att;
  }
}

class Monster {
  constructor(game, name, hp, att, xp) {
    this.game = game;
    this.name = name;
    this.maxHp = hp;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }
  attack(target) {
    target.hp -= this.att;
  }
}

let game = null;
$startScreen.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target['name-input'].value;
  game = new Game(name);
})
$startScreen.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target['name-input'].value;
  $startScreen.style.display = 'none';
  $gameMenu.style.display = 'block';
  $heroName.textContent = name;
  $heroLevel.textContent = `Lev : ${hero.lev}`;
  $heroHp.textContent = `HP : ${hero.hp}/${hero.maxHp}`;
  $heroXp.textContent = `XP : ${hero.xp}/${hero.lev * 15}`;
  $heroAtt.textContent = `ATT : ${hero.att}`;
  hero.name = name;
});

$gameMenu.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target['menu-input'].value;
  if (input === '1') { //모험
    $gameMenu.style.display = 'none';
    $battleMenu.style.display = 'block';
    monster = JSON.parse(
      JSON.stringify(monsterList[Math.floor(Math.random() * monsterList.length)])
      );
      monster.maxHp = monster.hp;
      $monsterName.textContent = monster.name;
      $monsterHp.textContent = `HP : ${monster.hp} / ${monster.maxHp}`;
      $monsterAtt.textContent = `ATT : ${$monster.att}`;
  } else if (input === '2'){ //휴식

  } else if (input === '3') { //종료

  }
})

$battleMenu.addEventListener('submit',(event) => {
  event.preventDefault();
  const input = event.target['battle-input'].value;
  if(input === '1') { //공격
    hero.attack(monster);
    monster.attack(hero);
    $heroHp.textContent = `HP : ${hero.hp}/${hero.maxHp}`;
    $monsterHp.textContent = `HP : ${monster.hp} / ${monster.maxHp}`;
    $message.textContent = `${hero.att}의 데미지를 주고 ${$monster.att}의 데미지를 받았다.`
  } else if (input === '2') { //회복

  } else if (input === '3') { //도망

  }
})