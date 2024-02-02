// backgrounds
import saiman from './background/saiman.jpg';
import astral from './background/astral.jpg';
import eoaalien from './background/eoaalien.jpg';
import panight from './background/panight.jpg';
import heroImg from './background/hero-img.jpg';

// cards
import ace from './cards/Ace.png';
import bakezori from './cards/Bakezori.png';
import blackSolus from './cards/Black_Solus.png';
import calligrapher from './cards/Calligrapher.png';
import chakriAvatar from './cards/Chakri_Avatar.png';
import coalfist from './cards/Coalfist.png';
import desolator from './cards/Desolator.png';
import duskRigger from './cards/Dusk_Rigger.png';
import flamewreath from './cards/Flamewreath.png';
import furiosa from './cards/Furiosa.png';
import geomancer from './cards/Geomancer.png';
import goreHorn from './cards/Gore_Horn.png';
import heartseeker from './cards/Heartseeker.png'; 
import jadeMonk from './cards/Jade_Monk.png';
import kaidoExpert from './cards/Kaido_Expert.png';
import katara from './cards/Katara.png';
import kiBeholder from './cards/Ki_Beholder.png';
import kindling from './cards/Kindling.png';
import lanternFox from './cards/Lantern_Fox.png';
import mizuchi from './cards/Mizuchi.png';
import orizuru from './cards/Orizuru.png';
import scarletViper from './cards/Scarlet_Viper.png';
import stormKage from './cards/Storm_Kage.png';
import suzumebachi from './cards/Suzumebachi.png';
import tuskBoar from './cards/Tusk_Boar.png';
import twilightFox from './cards/Twilight_Fox.png';
import voidTalon from './cards/Void_Talon.png';
import whiplash from './cards/Whiplash.png';
import widowmaker from './cards/Widowmaker.png';
import xho from './cards/Xho.png';

// logo
import logo from './logo.svg';

// icon
import attack from './icons/attack.png';
import defense from './icons/defense.png';
import alertIcon from './icons/alertIcon.svg';

// players
import player01 from './player-icons/player01.png';
import player02 from './player-icons/player02.png';

// sounds
import attackSound from './sounds/attack.wav';
import defenseSound from './sounds/defense.mp3';
import explosion from './sounds/explosion.mp3';

export const allCards = [
  ace,
  bakezori,
  blackSolus,
  calligrapher,
  chakriAvatar,
  coalfist,
  desolator,
  duskRigger,
  flamewreath,
  furiosa,
  geomancer,
  goreHorn,
  heartseeker,
  jadeMonk,
  kaidoExpert,
  katara,
  kiBeholder,
  kindling,
  lanternFox,
  mizuchi,
  orizuru,
  scarletViper,
  stormKage,
  suzumebachi,
  tuskBoar,
  twilightFox,
  voidTalon,
  whiplash,
  widowmaker,
  xho,
];

export {
  saiman,
  astral,
  eoaalien,
  panight,
  heroImg,

  ace,
  bakezori,
  blackSolus,
  calligrapher,
  chakriAvatar,
  coalfist,
  desolator,
  duskRigger,
  flamewreath,
  furiosa,
  geomancer,
  goreHorn,
  heartseeker,
  jadeMonk,
  kaidoExpert,
  katara,
  kiBeholder,
  kindling,
  lanternFox,
  mizuchi,
  orizuru,
  scarletViper,
  stormKage,
  suzumebachi,
  tuskBoar,
  twilightFox,
  voidTalon,
  whiplash,
  widowmaker,
  xho,

  logo,

  attack,
  defense,
  alertIcon,

  player01,
  player02,

  attackSound,
  defenseSound,
  explosion,
};

export const battlegrounds = [
  { id: 'bg-saiman', image: saiman, name: 'Saiman' },
  { id: 'bg-astral', image: astral, name: 'Astral' },
  { id: 'bg-eoaalien', image: eoaalien, name: 'Eoaalien' },
  { id: 'bg-panight', image: panight, name: 'Panight' },
];

export const gameRules = [
  'Card with the same defense and attack point will cancel each other out.',
  'Attack points from the attacking card will deduct the opposing player’s health points.',
  'If P1 does not defend, their health wil be deducted by P2’s attack.',
  'If P1 defends, P2’s attack is equal to P2’s attack - P1’s defense.',
  'If a player defends, they refill 3 Mana',
  'If a player attacks, they spend 3 Mana',
  'Each player starts the game with 30 health points.',
  'Players take turns, and each turn consists of a main phase and a combat phase.',
  'During the main phase, players can play cards from their hand, including creatures, spells, and support cards.',
  'Players have a maximum Mana pool of 10, which is replenished at the start of their turn.',
  'Creatures can be summoned onto the battlefield during the main phase by spending Mana equal to their cost.',
  'Support cards can enhance creatures, provide buffs, or have other strategic effects.',
  'Spells can be cast during the main phase to unleash powerful effects on the battlefield.',
  'After the main phase, players enter the combat phase, where they can attack their opponent or their opponent’s creatures.',
  'Creatures can attack the opponent directly or target specific enemy creatures.',
  'Card with the same attack and defense points will cancel each other out during combat.',
  'If a players health points reach 0, they lose the game, and the opponent is declared the winner.',
  'Players can choose to defend during their turn, reducing the damage taken from attacks.',
  'When a player defends, they gain 3 Mana, promoting strategic choices between attacking and defending.',
  'Some cards have special abilities that can be activated during specific phases or occasions.',
  'Players can draw one card at the beginning of their turn.',
  'A player can have a maximum of 10 cards in their hand; excess cards must be discarded.',
  'The first player to reduce their opponent’s health to 0 or less is declared the winner.',
  'The game can also be won by meeting specific victory conditions or completing certain objectives.',
  'Players can customize their decks before the game, selecting cards that fit their strategy and playstyle.',
  'Consider house rules or variations to add complexity or unique twists to the gameplay.',
];