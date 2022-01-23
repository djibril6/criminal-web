export enum ECategory {
  HUMANITY = 'humanity',
  NATURE = 'nature',
}

export enum EVoteType {
  THUMB_UP = 'thumbUp',
  THUMB_DOWN = 'thumbDown',
  NONE = 'none',
}

export type IVote = {
  voter: string;
  voteType: EVoteType;
};

export type PeopleType = {
  name?: string;
  picture?: string;
  votes?: IVote[];
  categories: ECategory;
  description: string;
  tags: string[];
  id: string;
};

export type resultType = {
  limit: number;
  page: number;
  totalPages: number;
  totalResults: number;
  results: PeopleType[];
};
