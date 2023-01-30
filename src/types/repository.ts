interface License {
    spdxId: string
}

interface RepositoryNode {
    id: string
    name: string
    licenseInfo: License | null
    url: string
    viewerSubscription: string
}

export interface Repository {
    node: RepositoryNode
}