import reducer, { loaded } from '../redux/airpollutionReducer';

const data = [[{
  id: '79f37ab6-3534-43e6-b9dc-fa99f5c9d8d0',
  name: 'Algeria',
  region: 'Africa',
  flags: 'https://flagcdn.com/w320/dz.png',
  main: {
    aqi: 1,
  },
  components: {
    co: 165.22,
    no: 0,
    no2: 0.43,
    o3: 75.82,
    so2: 0.09,
    pm2_5: 32.69,
    pm10: 146.66,
    nh3: 0.02,
  },
}],
[{
  id: '79f37ab6-3534-43e6-b9dc-fa456c9d8d0',
  name: 'Jordan',
  region: 'Asia',
  flags: 'https://flagcdn.com/a320/dz.png',
  main: {
    aqi: 1,
  },
  components: {
    co: 15.22,
    no: 10,
    no2: 10.43,
    o3: 70.82,
    so2: 10.09,
    pm2_5: 30.69,
    pm10: 156.66,
    nh3: 10.02,
  },
}],
];

const loadedFulfilled = {
  type: loaded.fulfilled,
  payload: data,
};

test('Fill store with data', () => {
  const state = reducer({ continents: [] }, loadedFulfilled);
  expect(state.continents).toHaveLength(2);
});
