export type WikiPageResponse = {
  batchcomplete: string;
  query: {
    pages: {
      [index: number]: WikiPage;
    };
  };
};

export type WikiPage = {
  extract: string;
  pageid: number;
  title: string;
};
