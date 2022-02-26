export type WikiSearchResponse = {
  batchcomplete: string;
  query: {
    search: WikiSearchItem[];
    searchinfo: {
      totalhints: number;
    };
  };
};

export type WikiSearchItem = {
  title: string;
  pageid: number;
  wordcount: number;
  timestamp: string;
};
