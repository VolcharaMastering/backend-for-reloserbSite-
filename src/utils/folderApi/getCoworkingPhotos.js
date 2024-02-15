const galleryContent = import.meta.glob("../../assets/coworkPictures/*", { eager: true });
const galleryArray = Object.entries(galleryContent).map(([key, module]) => ({
  path: key,
  name: module,
}));

export default galleryArray;
