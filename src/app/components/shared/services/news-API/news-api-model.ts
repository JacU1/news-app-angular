 export interface NewsApiResponse {
    articles: ArticlesObject[],
    status: string,
    totalResults: number
  }

  export interface ArticlesObject {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
      id: string,
      name: string
    },
    title: string,
    url:string,
    urlToImage: string
  }
