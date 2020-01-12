/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbum = `mutation CreateAlbum(
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
        exif
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const updateAlbum = `mutation UpdateAlbum(
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
        exif
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const deleteAlbum = `mutation DeleteAlbum(
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
        exif
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const createPhoto = `mutation CreatePhoto(
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
`;
export const updatePhoto = `mutation UpdatePhoto(
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
`;
export const deletePhoto = `mutation DeletePhoto(
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
`;
export const createComment = `mutation CreateComment(
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
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const updateComment = `mutation UpdateComment(
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
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment(
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
      }
      comments {
        nextToken
      }
    }
  }
}
`;
