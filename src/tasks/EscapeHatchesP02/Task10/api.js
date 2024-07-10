export function fetchData(url) {
  if (url === '/planets') {
    return fetchPlanets();
  } else if (url.startsWith('/planets')) {
    const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
    if (!match || !match[1] || !match[1].length) {
      throw Error(
        'Expected URL like "/planets/earth/places". Received: "' + url + '".'
      );
    }
    return fetchPlaces(match[1]);
  } else
    throw Error(
      'Expected URL like "/planets" or "/planets/earth/places". Received: "' +
        url +
        '".'
    );
}

async function fetchPlanets() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Earth', 'Venus', 'Mars']);
    }, 1000);
  });
}

async function fetchPlaces(planet) {
  if (typeof planet !== 'string') {
    throw Error(
      'fetchPlaces(planetId) expects a string argument.' +
        'Instead received: ' +
        planet +
        '.'
    );
  }
  return new Promise(resolve => {
    setTimeout(() => {
      if (planet === 'Earth') {
        resolve(['Laos', 'Spain', 'Vietnam']);
      } else if (planet === 'Venus') {
        resolve(['Aurelia', 'Diana Chasma', 'Kumsong Vallis']);
      } else if (planet === 'Mars') {
        resolve(['Aluminium City', 'New New York', 'Vishniac']);
      } else throw Error('Uncnown planet: ' + planet);
    }, 1000);
  });
}
