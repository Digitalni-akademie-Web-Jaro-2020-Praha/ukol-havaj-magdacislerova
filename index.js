'use strict';

let osoba1 = {
  jmeno: 'Alena',
  uspory: 43000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

let osoba3 = {
  jmeno: 'Veronika',
  uspory: 33000,
};

let osoba4 = {
  jmeno: 'Jana',
  uspory: 29000,
};

let osoba5 = {
  jmeno: 'Sofie',
  uspory: 56000,
};

let osoba6 = {
  jmeno: 'Mariana',
  uspory: 47000,
};


const savingsTest = (x, y) => {
  const savingsTotal = x.uspory + y.uspory;
  if (savingsTotal >= 100000) {
    console.log('Juchů, jede se na dovolenou!');
    if (x.uspory >= 50000 && y.uspory >= 50000) {
      console.log('Obě holky mají naspořeno alespoň 50 000 Kč.')
    };
    if (x.uspory < 50000) {
      console.log(`${x.jmeno} má naspořeno ${x.uspory} Kč. Do cílové částky jí chybí ${50000 - x.uspory} Kč, které bude muset splatit kamarádce.`)
    };
    if (y.uspory < 50000) {
      console.log(`${y.jmeno} má naspořeno ${y.uspory} Kč. Do cílové částky jí chybí ${50000 - y.uspory} Kč, které bude muset splatit kamarádce.`)
    }
  };

  if (savingsTotal < 100000) {
    console.log(`Bohužel, na dovolenou se nejede, kamarádkám chybí našetřit ještě ${100000 - (savingsTotal)} Kč.`);
    if (x.uspory < 50000) {
      console.log(`${x.jmeno} musí naspořit ještě ${50000 - x.uspory} Kč.`)
    };
    if (osoba2.uspory < 50000) {
      console.log(`${y.jmeno} musí naspořit ještě ${50000 - y.uspory} Kč.`)
    };
  };
};

savingsTest(osoba1, osoba2); //otestovat ostatní varianty lze zavoláním funkce s odlišnými vstupy
