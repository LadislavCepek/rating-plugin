import Component from "./component";

export default class InputComponent extends Component
{
    public name: string;
    public type: string = 'hidden';
    public value: string;

    public constructor(name: string, value: string, type: string = 'hidden', config: any = null)
    {
        super(config);

        this.name = name;
        this.value = value;
        this.type = type;

        this.init();
    }

    public render()
    {
        this.node = document.createElement('input');
        this.node.setAttribute('name', this.name);
        this.node.setAttribute('type', 'hidden');
        this.node.setAttribute('value', this.value);

        return this.node;
    }

    public changeValue(value: string)
    {
        this.value = value;
        this.node.setAttribute('value', value);
    }
}