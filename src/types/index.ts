export interface IFilterOptions {
  id: number;
  name: string;
}

export interface IBookInfo {
  allowAnonLogging: boolean;
  authors: string[];
  canonicalVolumeLink: string;
  contentVersion: string;
  description?: string;
  infoLink: string;
  language: string;
  maturityRating: string;
  categories: string[];
  pageCount: number;
  industryIdentifiers: [
    {
      identifier: string;
      type: string;
    }
  ];
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
  };
  previewLink: string;
  printType: string;
  publishedDate: string;
  readingModes: {
    image: boolean;
    text: boolean;
  };
  subtitle?: string
  title: string;
}

export interface IBook {
  accessInfo: {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    publicDomain: boolean;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
    epub?: {
      isAvailable: boolean;
    };
    pdf?: {
      isAvailable: boolean;
    };
  };
  etag: string;
  id: string;
  kind: string;
  saleInfo: {
    country: string;
    isEbook: boolean;
    saleability: string;
  };
  selfLink: string;
  volumeInfo: IBookInfo
}

export interface IData {
  items: IBook[];
  kind: string;
  totalItems: string;
}
