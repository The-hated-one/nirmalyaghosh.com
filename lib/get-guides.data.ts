import { allGuides } from ".contentlayer/data";
import find from "lodash/find";

export const getCurrentGuide = (slug: string) => {
  const allGuides = getAllGuides();

  const currentGuide = find(allGuides, (guide) => {
    if (guide.slug === slug) {
      return guide;
    }
  });

  return currentGuide;
};

export const getAllGuides = () => {
  return allGuides;
};
