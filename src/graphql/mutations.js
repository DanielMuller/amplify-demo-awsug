/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
