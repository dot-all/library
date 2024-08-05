export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface Book {
  id: string;
  etag: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors: string[];
    publishedDate: string;
    publisher: string;
    language: string;
    categories: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
      smallThumbnail?: string;
    };
    industryIdentifiers?: IndustryIdentifier[];
  };
  searchInfo: {
    textSnippet?: string;
  }
}

export interface BooksResponse {
  items: Book[];
}
