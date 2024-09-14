/**
 * This inserts into the HTML page a loading icon and after a loaded signal is received it removes them.
 * Isso insere um icone de carregamento e apos um sinal recebido ele eh removido.
 */
export default class LoadingIcon{

    constructor(source){
        this.source = source;
    }

    /**
     * Inserts a div containing an img element which source was provided through this object construtor. It also inserts keyframes into the document stylesheet 0.
     * Insere uma div contendo um elemento img cuja source foi provida pelo construtor do objeto. Tambem insere keyframes no stylesheet 0 do documento.
     * @returns null
     */
    insert(){
        const target = document.body;

        if (!target) {
            return null;
        }

        target.innerHTML += `
            <div id='loading'>
              <img id='loading-icon' src='${this.source}' alt='Loading Icon' />
              <span>Loading...</span>
            </div>
        `;

        this.loading = document.getElementById('loading');
        this.loadingIconEl = document.getElementById("loading-icon");

        // Assigns styles
        Object.assign(this.loading.style, this.loadingOverlayStyle);
        Object.assign(this.loadingIconEl.style , this.loadingIconStyle);

        // Inserts Keyframe into the first CSS stylesheet found in the document.
        if (document.styleSheets[0]) {
            document.styleSheets[0].insertRule(this.loadingKeyframes, document.styleSheets[0].cssRules.length);
        }
        else{
            console.warn("Style sheet not found! This means animations may not work!");
        }

        return null;
    }

    /**
     * Inserts into targetID a div containing an img element and keyframes into the document stylesheet 0.
     * Insere no targetID uma div contendo um elemento img e keyframes no stylesheet 0 do documento.
     * @param {String} targetID 
     * @returns null
     */
    insertAt(targetID){
        const target = document.getElementById(targetID);

        if (!target) {
            return null;
        }

        target.innerHTML += `
            <div id='loading'>
              <img id='loading-icon' src='${this.source}' alt='Loading Icon' />
              <span>Loading...</span>
            </div>
        `;

        this.loading = document.getElementById('loading');

        this.loading = document.getElementById('loading');
        this.loadingIconEl = document.getElementById("loading-icon");

        // Assigns styles
        Object.assign(this.loading.style, this.loadingOverlayStyle);
        Object.assign(this.loadingIconEl.style , this.loadingIconStyle);

        // Inserts Keyframe into the first CSS stylesheet found in the document.
        if (document.styleSheets[0]) {
            document.styleSheets[0].insertRule(this.loadingKeyframes, document.styleSheets[0].cssRules.length);
        }
        else{
            console.warn("Style sheet not found! This means animations may not work!");
        }

        return null;
    };

    /**
     * Hides the loading icon.
     * Esconde o icone de carregamento.
     */
    hide(){
        const loading = document.getElementById('loading');
        if (loading) loading.style.display = 'none';
    };

    /**
     * Shows the loading icon.
     * Mostra o icone de carregamento.
     */
    show(){
        const loading = document.getElementById('loading');
        if (loading) loading.style.display = 'block';
    };

    loadingKeyframes = `
    @keyframes spinspin {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `;

    loadingIconStyle = {
        width: '100px',
        height: '100px',
        margin: '10px 0px',
        userDrag: 'none',
        userSelect: 'none',
        animationName: 'spinspin',
        animationDuration: '3s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
    };

    loadingOverlayStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        backgroundColor: "#26242b",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
        fontSize: "x-large",
    };
};