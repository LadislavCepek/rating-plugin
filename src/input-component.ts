import Component from "./component";

export default class InputComponent extends Component
{
    public selector: string;
    public name: string;
    public type: string;
    public value: number;

    public render()
    {
        super.render();

        if (this.selector) {
            this.node = document.querySelector(this.selector);
        }

        if (!this.node) {
            this.node = document.createElement('input');
            this.node.setAttribute('name', this.name);
            this.node.setAttribute('type', 'hidden');
        }

        this.changeValue(this.value);

        return this.node;
    }

    public changeValue(value: number)
    {
        this.value = value;
        this.node.setAttribute('value', value !== null ? value.toString() : null);
    }

    protected setDefaultProps(): void
    {
        this.selector = null;
        this.name = null;
        this.type = 'hidden';
        this.value = null;
    }
}
