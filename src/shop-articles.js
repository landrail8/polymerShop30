import {LitElement, html} from '@polymer/lit-element';
    
import '@polymer/iron-list/iron-list.js';

class ShopArticles extends LitElement {

  static get properties() { return { mood: String, items: Array }}
  
  constructor() {
    super();
    this.items = [
      {i: '0'},
      {i: '1'},
      {i: '2'}
    ]
  }

  render() {
    const {mood, items} = this;
    return html`<style> .mood { color: green; } </style>
      Web Components are <span class="mood">${mood}</span>!
      <iron-list .items="${items}" @click="${e => this._itemClickHandler(e)}">
        <template>
          <div>
            [[item.i]]
          </div>
        </template>
      </iron-list>`;
  }
  
  _itemClickHandler(e) {
    console.log(this._list.modelForElement(e.target).item);
  }
  
  firstUpdated() {
    this._list = this.shadowRoot.querySelector('iron-list');
  }
  
}

customElements.define('shop-articles', ShopArticles);