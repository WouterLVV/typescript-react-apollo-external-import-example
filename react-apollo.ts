import * as Operations from './types';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;


/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<Operations.UserQuery, Operations.UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Operations.UserQuery, Operations.UserQueryVariables>(Operations.user, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Operations.UserQuery, Operations.UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Operations.UserQuery, Operations.UserQueryVariables>(Operations.user, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Operations.UserQuery, Operations.UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Operations.UserQuery, Operations.UserQueryVariables>(Operations.user, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<Operations.UserQuery, Operations.UserQueryVariables>;