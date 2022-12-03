import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const continentArr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
const allItems = [];

const fetchAir = async (coor) => {
  const airPollution = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${coor.latlng[0]}&lon=${coor.latlng[1]}&appid=483a591d9d7d57de22ec2147fb88a5ce`);
  return airPollution.data.list[0];
};

export const fetchContinents = async () => {
  const asyncRes = await Promise.all(continentArr.map(async (i) => {
    const continentApi = await axios.get(`https://restcountries.com/v2/region/${i}`);
    const items = await Promise.all(continentApi.data.map(async (item) => {
      if (item.name === 'United States Minor Outlying Islands') { item.latlng = [19.2823, 166.6470]; }
      const air = await fetchAir(item);
      const sumData = { ...item, ...air };
      return sumData;
    }));
    return items;
  }));
  return asyncRes;
};

export const loaded = createAsyncThunk(
  'continent/loaded', async () => { const fetchC = await fetchContinents(); return fetchC; },
);

const continentSlice = createSlice({
  name: 'continent',
  initialState: { continents: [] },
  reducers: {
    fetchStorage: (state) => {
      const data = JSON.parse(localStorage.getItem('continentAirPollution'));
      return {
        ...state,
        continents: data,
      };
    },
    filterUIstore: (state, action) => ({ ...state, continents: action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(loaded.fulfilled, (state, action) => {
      action.payload?.map((item, i = 0) => {
        const data = [];
        let country = {};
        item.map((key) => {
          country = {
            name: key.name,
            region: key.region,
            components: key.components,
            aqi: key.main.aqi,
            id: uuidv4(),
            flag: key.flags.png,
          };
          data.push(country);
          return data;
        });
        allItems.push({ continent: continentArr[i], data });
        i += 1;
        localStorage.setItem('continentAirPollution', JSON.stringify(allItems));
        return allItems;
      });
      return {
        ...state,
        continents: allItems,
      };
    });
  },
});

export const { fetchStorage, filterUIstore } = continentSlice.actions;
export default continentSlice.reducer;
