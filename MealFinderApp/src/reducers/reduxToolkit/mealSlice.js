import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import { mealCatApi } from "../../services/apis"

export const fetchMealCategories = createAsyncThunk(
    "meal/fetchCategories",
    async (_, { rejectWithValue }) => {
        try {
            const response = await mealCatApi();
            return response.data.categories;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const mealSlice = createSlice({
    name: "mealcat",
    initialState: {
        loading: false,
        categories: [],
        error: "",
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMealCategories.pending,(state)=>{
            state.loading= true;
        })
        .addCase(fetchMealCategories.fulfilled,(state,action)=>{
            state.loading= false,
            state.categories=action.payload;
        })
        .addCase(fetchMealCategories.rejected,(state,action)=>{
            state.loading= false,
            state.error= action.payload;
        });
    },
});

export default mealSlice.reducer;