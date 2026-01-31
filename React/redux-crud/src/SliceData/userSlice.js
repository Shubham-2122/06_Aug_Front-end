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

export const deletUser = createAsyncThunk(
    'deletUser',
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`)
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const EditUser = createAsyncThunk(
    'EditUser', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:3000/users/${data.id}`, data)
            const result = await res.data
            return result;
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

            // delete case
            .addCase(deletUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deletUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter(
                    (user) => user.id !== action.payload
                );
            })

            .addCase(deletUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // edit data

            .addCase(EditUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(EditUser.fulfilled, (state, action) => {
                state.loading = false;

                state.users = state.users.map((data) =>
                    data.id === action.payload.id ? action.payload : data
                );
            })
            .addCase(EditUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { userPending, userFullfield, userRejected } = userSlice.actions;

export default userSlice.reducer;