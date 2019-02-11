/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) */
export class UserService {
  private authorized: boolean = false;
  private selectedSource: string = 'CNN';
  public mockNews = [{
    id: '1',
    source: {
      id: "crypto-coins-news",
      name: "Crypto Coins News"
      },
      author: "Joseph Young",
      title: "$136 Million in Missing Crypto From QuadrigaCX Could be Gone Forever: WSJ",
      description: "Canada’s largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten. In an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th…",
      url: "https://www.ccn.com/136-million-in-missing-crypto-from-quadrigacx-could-be-gone-forever-wsj",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190205225347-dopald-trump-february-5-2019-01-super-tease.jpg",
      publishedAt: "2019-02-08T10:16:20Z",
      content: "Canadas largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten.\r\nIn an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th… [+4331 chars]"
    },
    {
      id: '2',
    source: {
      id: "crypto-coins-news",
      name: "Crypto Coins News"
      },
      author: "Joseph Young",
      title: "$136 Million in Missing Crypto From QuadrigaCX Could be Gone Forever: WSJ",
      description: "Canada’s largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten. In an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th…",
      url: "https://www.ccn.com/136-million-in-missing-crypto-from-quadrigacx-could-be-gone-forever-wsj",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190205225347-dopald-trump-february-5-2019-01-super-tease.jpg",
      publishedAt: "2019-02-08T10:16:20Z",
      content: "Canadas largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten.\r\nIn an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th… [+4331 chars]"
    }, {
      id: '3',
    source: {
      id: "crypto-coins-news",
      name: "Crypto Coins News"
      },
      author: "Joseph Young",
      title: "$136 Million in Missing Crypto From QuadrigaCX Could be Gone Forever: WSJ",
      description: "Canada’s largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten. In an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th…",
      url: "https://www.ccn.com/136-million-in-missing-crypto-from-quadrigacx-could-be-gone-forever-wsj",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190205225347-dopald-trump-february-5-2019-01-super-tease.jpg",
      publishedAt: "2019-02-08T10:16:20Z",
      content: "Canadas largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten.\r\nIn an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th… [+4331 chars]"
    }, {
      id: '4',
    source: {
      id: "crypto-coins-news",
      name: "Crypto Coins News"
      },
      author: "Joseph Young",
      title: "$136 Million in Missing Crypto From QuadrigaCX Could be Gone Forever: WSJ",
      description: "Canada’s largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten. In an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th…",
      url: "https://www.ccn.com/136-million-in-missing-crypto-from-quadrigacx-could-be-gone-forever-wsj",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190205225347-dopald-trump-february-5-2019-01-super-tease.jpg",
      publishedAt: "2019-02-08T10:16:20Z",
      content: "Canadas largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten.\r\nIn an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th… [+4331 chars]"
    }, {
      id: '5',
    source: {
      id: "crypto-coins-news",
      name: "Crypto Coins News"
      },
      author: "Joseph Young",
      title: "$136 Million in Missing Crypto From QuadrigaCX Could be Gone Forever: WSJ",
      description: "Canada’s largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten. In an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th…",
      url: "https://www.ccn.com/136-million-in-missing-crypto-from-quadrigacx-could-be-gone-forever-wsj",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190205225347-dopald-trump-february-5-2019-01-super-tease.jpg",
      publishedAt: "2019-02-08T10:16:20Z",
      content: "Canadas largest digital asset exchange QuadrigaCX has claimed to have lost more than $136 million worth of crypto in cold wallets controlled by its CEO Gerald Cotten.\r\nIn an official affidavit filed with the Nova Scotia Supreme Court by Jennifer Robertson, th… [+4331 chars]"
  }]
  constructor() { }

  public login() {
    this.authorized = true;
  }

  public logout() {
    this.authorized = false;
  }

  public isAuthorized() {
    return this.authorized;
  }

  public selectSource(source) {
  	this.selectedSource = source;
  }

  public getSource() {
  	return this.selectedSource;
  }

  public getArticle(id) {
    return this.mockNews.find((el, i) => {
      if (el.id === id){
      return el
      }
    })
  }
}
