export interface Sources {
  status: string,
  sources: [{
    category: string,
    country: string,
    description: string,
    id: string,
    language: string,
    name: string,
    url: string
  }];
}