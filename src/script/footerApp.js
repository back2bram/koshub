class FooterApp extends HTMLElement{
    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode:'open'});
        this._style      = document.createElement('style');
    }

    connectedCallback(){
        this.render();
    }

    updateStyle(){
        this._style.textContent = `
            <style>
                :host{
                    display: block;
                    width: 100%;
                }

                div{
                    padding: 20px 20px;
                    text-align: center;
                    color   : white;
                }

                .footer-name{
                    margin:0;
                }

            </style>
        `
    }
    
    render(){
        this.updateStyle();

        console.log(this._style.outerHTML);

        this._shadowRoot.innerHTML = `
            ${this._style.outerHTML}

            <div>
                @2024, CB24-FS211@dicoding.org
            </div>
        `
    }
}

customElements.define('footer-app', FooterApp)