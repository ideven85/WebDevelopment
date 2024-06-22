function changeBackgroundColor(selector){
    /**
     * Change background color matching the selector
     */
    const nodes=document.querySelectorAll(selector);
    for(let node of nodes){
        node.setAttribute('style','background-color: yellow');
    }
}