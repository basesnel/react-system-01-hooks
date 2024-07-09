export function fetchData(url) {
  if (url === '/planets') {
    return fetchPlanets();
  } else if (url.startWith('/planets')) {
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
      resolve([
        {
          id: 'earth',
          name: 'Earth',
        },
        {
          id: 'venus',
          name: 'Venus',
        },
        {
          id: 'mars',
          name: 'Mars',
        },
      ]);
    }, 1000);
  });
}

async function fetchPlaces(planetId) {
  if (typeof planetId !== 'string') {
    throw Error(
      'fetchPlaces(planetId) expects a string argument.' +
        'Instead received: ' +
        planetId +
        '.'
    );
  }
  return new Promise(resolve => {
    setTimeout(() => {
      if (planetId === 'earth') {
        resolve([
          {
            id: 'laos',
            name: 'Laos',
          },
          {
            id: 'spain',
            name: 'Spain',
          },
          {
            id: 'vietnam',
            name: 'Vietnam',
          },
        ]);
      } else if (planetId === 'venus') {
        resolve([
          {
            id: 'aurelua',
            name: 'Aurelia',
          },
          {
            id: 'diana-chasma',
            name: 'Diana Chasma',
          },
          {
            id: 'kumsong-vallis',
            name: 'Kumsong Vallis',
          },
        ]);
      } else if (planetId === 'mars') {
        resolve([
          {
            id: 'aluminium-city',
            name: 'Aluminium City',
          },
          {
            id: 'new-new-york',
            name: 'New Nwe York',
          },
          {
            id: 'vishniac',
            name: 'Vishniac',
          },
        ]);
      } else throw Error('Uncnown planet ID: ' + planetId);
    }, 1000);
  });
}
