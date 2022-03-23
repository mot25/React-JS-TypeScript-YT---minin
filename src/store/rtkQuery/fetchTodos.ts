import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INewTodo } from "../../pages/TodoPage";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000"
  }),
  tagTypes: ["todos"],
  endpoints: (build) => ({
    fetchUsers: build.query<INewTodo[], string>({
      query: () => ({
        url: "/todos"
      }),
      providesTags: (result) => ["todos"]
    })
  })
});
