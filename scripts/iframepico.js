function openPico(){
    const iframe = document.createElement("iframe");
    iframe.setAttribute('src', windowAdaFarm);
    iframe.setAttribute('width', '500');
    iframe.setAttribute('height', '500');
    log.appendChild(iframe)
};