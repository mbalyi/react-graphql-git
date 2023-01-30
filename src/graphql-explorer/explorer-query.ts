export const exploreQuery = (username: string, searchString: string, itemPerPage: number) => `
    {
        viewer {
            name
        }
        search(query: "${searchString} user:${username} sort:updated-desc", type: REPOSITORY, first: ${itemPerPage}) {
            repositoryCount
            edges {
                cursor
                node {
                    ... on Repository {
                        id
                        name
                        description
                        url
                        viewerSubscription
                        licenseInfo {
                            spdxId
                        }
                    }
                }
            }
            pageInfo {
                startCursor
                endCursor
                hasPreviousPage
                hasNextPage
            }
        }
    }
`;
