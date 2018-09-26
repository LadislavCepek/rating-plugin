import Component from "./component";

export default class InputComponent extends Component
{
    public selector: string;
    public name: string;
    public type: string;
    public value: number;
    public placeholder: string;
    public label: string;

    public render()
    {
        super.render();

        if (this.selector) {
            this.node = document.querySelector(this.selector);
            let value = this.node.getAttribute('value');

            if (value) {
                let parsedValue = parseInt(value, 10);
                
                if (parsedValue !== NaN) {
                    this.value = parsedValue;
                }
            }
        }

        let formGroup = null;
        if (!this.node) {
            this.node = document.createElement('input');
            this.node.setAttribute('name', this.name);
            this.node.setAttribute('id', this.id);
            this.node.setAttribute('type', this.type);
            this.node.setAttribute('placeholder', this.placeholder);

            let labelNode = null;
            if (this.label) {
                labelNode = document.createElement('label');
                labelNode.setAttribute('for', this.id);
                labelNode.textContent = this.label;
            }
            
            if (this.type !== 'hidden') {
                formGroup = document.createElement('div');
                formGroup.setAttribute('class', 'form-group');

                if (labelNode) {
                    formGroup.appendChild(labelNode);
                }

                formGroup.appendChild(this.node);                
            }

            this.node.setAttribute('class', this.className);
        }

        this.changeValue(this.value);

        return formGroup ? formGroup : this.node;
    }

    public changeValue(value)
    {
        this.value = value;
        this.node.setAttribute('value', value !== null ? value.toString() : null);
    }

    protected setDefaultProps(): void
    {
        this.id = 'rating-input';
        this.selector = null;
        this.name = 'rating-input';
        this.type = 'hidden';
        this.value = null;
        this.className = 'form-control';
        this.label = null;
        this.placeholder = '';
    }
}
