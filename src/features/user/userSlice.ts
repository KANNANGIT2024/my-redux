// import { createSlice } from "@reduxjs/toolkit";
// import { fetchUsers } from "./userAPI";

// interface UserState {
//   users: any[];
//   loading: boolean;
// }

// const initialState: UserState = {
//   users: [],
//   loading: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.users = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchUsers.rejected, (state) => {
//         state.loading = false;
//       });
//   },
// });

// export default userSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/services/axios";


export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await api.get("/users");
    return res.data;
  }
);

type UserState = {
  users: any[];
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;