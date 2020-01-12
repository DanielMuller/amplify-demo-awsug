/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAlbums = `query ListAlbums(
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
export const getAlbum = `query GetAlbum($id: ID!) {
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
export const listAlbumsByOwner = `query ListAlbumsByOwner(
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
export const listAlbumsBySiteId = `query ListAlbumsBySiteId(
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
export const listPhotos = `query ListPhotos(
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
export const getPhoto = `query GetPhoto($id: ID!) {
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
export const getComment = `query GetComment($id: ID!) {
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
export const listComments = `query ListComments(
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
