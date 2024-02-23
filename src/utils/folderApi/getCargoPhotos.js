const galleryContent = import.meta.glob("../../assets/cargo/group/*", { eager: true });
const galleryArray = Object.entries(galleryContent).map(([key, module]) => ({
  path: key,
  name: module,
}));

export default galleryArray;
