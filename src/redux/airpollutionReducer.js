import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const continentAPI = 'http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat={lat}&lon={lon}&appid=483a591d9d7d57de22ec2147fb88a5ce';
console.log(continentAPI);

export const loaded = createAsyncThunk(
  'continent/loaded',
  async () => {
    const response = await fetch('https://cricket.sportmonks.com/api/v2.0/continents?api_token=Uz2Bwk9AOFgQXDG8f6mv80piy4OxqG07v8OAMu8z4XrB3IJVu45e7w264Z5c');
    const continentList = await response.json();
    return continentList.data;
  },
);

const continentSlice = createSlice({
  name: 'continent',
  initialState: { continents: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loaded.fulfilled, (state, action) => {
      const data = [];
      action.payload.map((key) => {
        const continentObj = {
          id: key.id,
          name: key.name,
          icon: `/${key.name}-icon.png`,
        };
        data.push(continentObj);
        return data;
      });
      return {
        ...state,
        continents: data,
      };
    });
  },
});

export default continentSlice.reducer;
