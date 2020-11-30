let propertyName = 'html';

class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get [propertyName]() {
        return this.element.innerHTML;
    }

    set [propertyName](value) {
        this.element.innerHTML = value;
    }
};

let obj = new CustomHTMLElement({});
obj.html = 'content';
console.log(obj.html);
