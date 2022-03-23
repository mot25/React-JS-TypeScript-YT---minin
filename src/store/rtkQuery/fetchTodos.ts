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
    }),
    addHadler: build.mutation<INewTodo, INewTodo>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo
      }),
      invalidatesTags: ["todos"]
    }),
    toggleHendler: build.mutation<INewTodo, INewTodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo
      }),
      invalidatesTags: ["todos"]
    }),
    deleteHendler: build.mutation<INewTodo, number>({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["todos"]
    })
  })
});
