/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = `subscription OnCreateAlbum {
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
export const onUpdateAlbum = `subscription OnUpdateAlbum {
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
export const onDeleteAlbum = `subscription OnDeleteAlbum {
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
export const onCreatePhoto = `subscription OnCreatePhoto {
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
export const onUpdatePhoto = `subscription OnUpdatePhoto {
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
export const onDeletePhoto = `subscription OnDeletePhoto {
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
export const onCreateComment = `subscription OnCreateComment {
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
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
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
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
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
      }
      comments {
        nextToken
      }
    }
  }
}
`;
