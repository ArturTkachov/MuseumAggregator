export type MetArtwork = {
  objectID: number,
  objectName: string,
  objectDate:	string,
  isHighlight: boolean,
  primaryImage: string,
  primaryImageSmall: string,
  additionalImages: string[],
  department: Department,
  period: string,
  artistDisplayName: string,
  country: string
  region: string
}

type Department = "Asian Art" | "Greek and Roman Art" | "Medieval Art"
