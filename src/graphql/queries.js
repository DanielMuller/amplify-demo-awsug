/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const translateName = /* GraphQL */ `
  query TranslateName($input: TranslateNameInput!) {
    translateName(input: $input)
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        siteId
        owner
        createdAt
        updatedAt
        photos {
          items {
            id
            exif
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      siteId
      owner
      createdAt
      updatedAt
      photos {
        items {
          id
          file {
            bucket
            key
            region
          }
          exif
          owner
          createdAt
          updatedAt
          album {
            id
            name
            siteId
            owner
            createdAt
            updatedAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listAlbumsByOwner = /* GraphQL */ `
  query ListAlbumsByOwner(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ListAlbumsByOwner(
      owner: $owner
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        siteId
        owner
        createdAt
        updatedAt
        photos {
          items {
            id
            exif
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listAlbumsBySiteId = /* GraphQL */ `
  query ListAlbumsBySiteId(
    $siteId: Int
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ListAlbumsBySiteId(
      siteId: $siteId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        siteId
        owner
        createdAt
        updatedAt
        photos {
          items {
            id
            exif
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        file {
          bucket
          key
          region
        }
        exif
        owner
        createdAt
        updatedAt
        album {
          id
          name
          siteId
          owner
          createdAt
          updatedAt
          photos {
            nextToken
          }
        }
        comments {
          items {
            id
            author
            content
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      file {
        bucket
        key
        region
      }
      exif
      owner
      createdAt
      updatedAt
      album {
        id
        name
        siteId
        owner
        createdAt
        updatedAt
        photos {
          items {
            id
            exif
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      comments {
        items {
          id
          author
          content
          createdAt
          updatedAt
          photo {
            id
            exif
            owner
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      author
      content
      createdAt
      updatedAt
      photo {
        id
        file {
          bucket
          key
          region
        }
        exif
        owner
        createdAt
        updatedAt
        album {
          id
          name
          siteId
          owner
          createdAt
          updatedAt
          photos {
            nextToken
          }
        }
        comments {
          items {
            id
            author
            content
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        content
        createdAt
        updatedAt
        photo {
          id
          file {
            bucket
            key
            region
          }
          exif
          owner
          createdAt
          updatedAt
          album {
            id
            name
            siteId
            owner
            createdAt
            updatedAt
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
