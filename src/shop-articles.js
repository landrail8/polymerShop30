import {LitElement, html} from '@polymer/lit-element';
    
import '@polymer/iron-list/iron-list.js';

class ShopArticles extends LitElement {

  static get properties() { return { mood: String, items: Array }}
  
  constructor() {
    super();
    this.mood = "moodyyyyy"
    this.items = [
      {title: 'title 1', anons: `anons 111anons 111anons 111anons 
      111anons 111 anons anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons 111 anons anons`, body: `What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a`},
      {title: 'title 2', anons: `anons 222 anons anons anons 222 anons anons`, body: `What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a`},
      {title: 'title 3', anons: 'anons 333 anons anons anons 333 anons anons', body: `What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a`}
    ]
  }

  render() {
    const {mood, items} = this;
    return html`
      <style> 

      iron-list {
        display: grid;
                   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                   grid-gap: 20px;
                     
                   }
                   
        // iron-list {
        //   --iron-list-items-container: {
        //     display: grid;
        //     grid-template-columns: repeat(300px, minmax(300px, 1fr));
        //     grid-gap: 20px;
            
        //   };
        // }


        
      </style>
      <h1>Title of chapter</h1>
        <iron-list .items="${items}" @click="${e => this._itemClickHandler(e)}" grid>
          <template>
            <div>
              <h2>
                [[item.title]]
              </h2>
              <p>
                [[item.anons]]
              </p>
            </div>
          </template>
        </iron-list>
    `;
  }
  
  _itemClickHandler(e) {
    console.log(this._list.modelForElement(e.target).item);
  }
  
  firstUpdated() {
    this._list = this.shadowRoot.querySelector('iron-list');
  }
  
}

customElements.define('shop-articles', ShopArticles);