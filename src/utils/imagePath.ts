/**
 * Helper function to import images from assets folder
 */
export const imagePath = (filename: string): string => {
  return new URL(`../assets/images/${filename}`, import.meta.url).href;
};
