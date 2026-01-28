import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read data
export const readData = createAsyncThunk(
    'readData', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/users")
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// new Data add
export const NewUser = createAsyncThunk(
    'NewUser', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/users", data)
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        loading: false,
        users: [],
        error: ""
    },
    reducers: {
        userPending: (state, action) => {
            state.loading = true
        },
        userFullfield: (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        },
        userRejected: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(readData.pending, (state, action) => {
                state.loading = true
            })
            .addCase(readData.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(readData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // newData
            .addCase(NewUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(NewUser.fulfilled, (state, action) => {
                state.loading = false
                state.users.push(action.payload)
            })
            .addCase(NewUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { userPending, userFullfield, userRejected } = userSlice.actions;

export default userSlice.reducer;