

export const numberWithCommas = (x) => {
    let parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

/*export const stripHtml = (text) => {
            let doc = new DOMParser().parseFromString(text, 'text/html');
            return doc.body.textContent || "";
        }*/