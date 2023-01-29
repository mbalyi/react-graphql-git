export const exploreQuery = (username: string) => `
    {
        viewer {
            name
        }
        search(query: "user:${username} sort:updated-desc", type: REPOSITORY, first: 3) {
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
