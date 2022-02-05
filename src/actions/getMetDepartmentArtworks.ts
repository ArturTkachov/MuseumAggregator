import { MetArtworksIDs } from "../types/MetArtworksIDs";

const getMetDepartmentArtworks = async (
  departmentID: number
): Promise<MetArtworksIDs | Error> => {
  try {
    const res = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=${departmentID}&q=""`
    );
    if (res.ok) return await res.json();
    return Promise.reject(
      new Error(`Wrong response status: ${res.status} ${res.statusText}`)
    );
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
};

export default getMetDepartmentArtworks;
