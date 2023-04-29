

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface Person {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    country_id: number,
}

export const personsSlice = createApi({
    reducerPath: 'personsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        // prepareHeaders(headers) {
        //     headers.set('x-api-key', DOGS_API_KEY);
        //     return headers
        // }
    }),
    tagTypes: ['PersonsTag'],
    endpoints(builder) {
        return {
            fetchPersons: builder.query<Person[], number|void>({
                query() {
                    return `/persons`
                },
                providesTags: ['PersonsTag'],
                transformResponse(res: any) { 
                    return res.sort((a:any, b:any) => b.id - a.id)
                }
            }),
            fetchPerson: builder.query<Person, number|void>({
                query() {
                    return `/persons/1`
                }
            }),
            addPerson: builder.mutation({
                query(person) {
                    return {
                        url: '/persons',
                        method: 'POST',
                        body: person
                    }
                },
                // Invalidate cache when new person is added 
                invalidatesTags: ['PersonsTag']
            })
        }
    }
})

export const { useFetchPersonsQuery, useFetchPersonQuery, useAddPersonMutation } = personsSlice;