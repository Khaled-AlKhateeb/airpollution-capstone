import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const continentArr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
const allItems = [];

const fetchAir = async (coor) => {
  const asyncRes = await Promise.all(coor.map(async (i) => {
    const airPollution = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${i.latlng[0]}&lon=${i.latlng[1]}&appid=069dc29b488a7d5f754be8f84a26461b`);
    return airPollution.data.list[0];
  }));
  return asyncRes;
};

const fetchContinents = async () => {
  const asyncRes = await Promise.all(continentArr.map(async (i) => {
    const continentApi = await axios.get(`https://restcountries.com/v2/region/${i}`);
    return continentApi.data;
  }));
  const items = await Promise.all(asyncRes.map(async (item) => {
    item.map((ka) => { if (ka.name === 'United States Minor Outlying Islands') { ka.latlng = [19.2823, 166.6470]; } });
    const sumData = [item, await fetchAir(item)];
    return sumData;
  }));
  return items;
};

export const loaded = createAsyncThunk(
  'continent/loaded', () => fetchContinents(),
);

const continentSlice = createSlice({
  name: 'continent',
  initialState: { continents: [] },
  reducers: {
    fetchStorage: (state, { payload }) => {
      const storeData = JSON.parse(localStorage.getItem('continentAirPollution'));
      return {
        ...state,
        continents: storeData,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loaded.fulfilled, (state, action) => {
      action.payload.map((item, i = 0) => {
        const data = [];
        const arr1 = item[0];
        const arr2 = item[1];
        let country = {};
        arr1.forEach((element, index) => {
          country = {
            name: element.name,
            region: element.region,
            components: arr2[index].components,
            aqi: arr2[index].main.aqi,
            id: uuidv4(),
          };
          data.push(country);
          return data;
        });
        allItems.push({ continent: continentArr[i], data });
        i++;
        localStorage.setItem('continentAirPollution', JSON.stringify(allItems));
        //return allItems;
      });
      //return {
      //  ...state,
      //  continents: allItems,
      //};
    });
  },
});

export const { fetchStorage } = continentSlice.actions;
export default continentSlice.reducer;
