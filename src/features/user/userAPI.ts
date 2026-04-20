import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/services/axios";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async () => {
    const response = await api.get("/users");
    return response.data;
  }
);