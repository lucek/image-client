export function setPhotos(data) {
  return {
    type: 'set_photos',
    data,
  };
}

export function setTags(data) {
  return {
    type: 'set_tags',
    data,
  };
}
