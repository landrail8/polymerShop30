import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { timeOut } from '@polymer/polymer/lib/utils/async.js';

class ShopArticlesData extends PolymerElement {

  static get is() { return 'shop-articles-data'; }



  static get properties() { return {

    failure: {
      type: Boolean,
      notify: true,
      readOnly: true
    },

    articles: {
      type: Array,
      //computed: '_computeArticles()',
      value() {
        return [
          {
            "url":"title-1",
            "title":"title 1", 
            "anons":"anons 111anons 111anons 111anons 111anons 111 anons anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons",
            "body":"What is Lorem Ipsum"
          },
          {
            "url":"title-2",
            "title":"title 2", 
            "anons":"anons 222anons 222anons 222anons 222anons 111 anons anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons",
            "body":"What is Lorem Ip"
          },
          {
            "url":"title-3",
            "title":"title 3", 
            "anons":"anons 333anons 333anons 333anons 111anons 111 anons anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons",
            "body":"What is Lorem Ip"
          }
        ];
      },
      notify: true
    },

    

  }}

  _computeArticles() {
    // Fetch the items of the category. Note that the fetch is asynchronous,
    // which means `article.items` may not be set initially (but that path
    // will be notified when the fetch completes).

    this.set('articles', [
      {
        "url":"title-1",
        "title":"title 1", 
        "anons":"anons 111anons 111anons 111anons 111anons 111 anons anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons",
        "body":"What is Lorem Ipsum"
      },
      {
        "url":"title-2",
        "title":"title 2", 
        "anons":"anons 222anons 222anons 222anons 222anons 111 anons anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons",
        "body":"What is Lorem Ip"
      },
      {
        "url":"title-3",
        "title":"title 3", 
        "anons":"anons 333anons 333anons 333anons 111anons 111 anons anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons",
        "body":"What is Lorem Ip"
      }
    ]);

    console.log("_computeArticles")

    //this._fetchArticles(1);
    //return articles;
  }

  _fetchArticles(attempts) {

    console.log("_fetchArticles");

    this._setFailure(false);
    this._getResource({
      url: 'data/articles.json',
      onLoad(e) {
        this.set('article.items', JSON.parse(e.target.responseText));
      },
      onError(e) {
        this._setFailure(true);
      }
    }, attempts);
  }

  _getResource(rq, attempts) {

    console.log("_getResource");


    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', rq.onLoad.bind(this));
    xhr.addEventListener('error', (e) => {
      // Flaky connections might fail fetching resources
      if (attempts > 1) {
        this._getResourceDebouncer = Debouncer.debounce(this._getResourceDebouncer,
          timeOut.after(200), this._getResource.bind(this, rq, attempts - 1));
      } else {
        rq.onError.call(this, e);
      }
    });

    xhr.open('GET', rq.url);
    xhr.send();
  }

  refresh() {
    // Try at most 3 times to get the items.
    this._fetchArticles(3);
  }

}

customElements.define(ShopArticlesData.is, ShopArticlesData);
