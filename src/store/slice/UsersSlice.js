import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: null,
  loading: false,
  selectedUser: null,
};

export const UsersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsers: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.usersData = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state) => {
      state.loading = false;
    },
    setSelectedUser: (state, action) => {
      console.log(action);
      state.selectedUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  setSelectedUser,
} = UsersSlice.actions;

export default UsersSlice.reducer;
