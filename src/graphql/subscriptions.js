/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
