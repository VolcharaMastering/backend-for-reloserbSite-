const galleryContent = import.meta.glob("../../assets/visaRun/group/*", { eager: true });
const galleryArray = Object.entries(galleryContent).map(([key, module]) => ({
  path: key,
  name: module,
}));

export default galleryArray;
