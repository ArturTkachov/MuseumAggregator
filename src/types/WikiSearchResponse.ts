export type WikiSearchResponse = {
  batchcomplete: string;
  query: {
    searchinfo: {
      totalhints: number;
      search: WikiSearchItem[];
    };
  };
};

export type WikiSearchItem = {
  title: string;
  pageid: number;
  wordcount: number;
  timestamp: string;
};
