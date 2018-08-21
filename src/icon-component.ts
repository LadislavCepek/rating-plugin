import Component from "./component";
import Icon from "./icon";

export default class IconComponent extends Component
{
    public icon: Icon;
    public id: string;

    public constructor(id: string, icon: Icon, config: any = null)
    {
        super(config);

        this.id = id;
        this.icon = icon;

        this.init();
    }

    public render() : HTMLElement
    {
        super.render();

        this.createIcon();

        return this.node;
    }

    protected createIcon()
    {
        if (this.icon.props.href) {
            this.node = document.createElement('img');
        } else {
            this.node = document.createElement('span');
        }

        this.node.setAttribute('id', this.id);

        this.changeIcon(this.icon);

        return this.node;
    }

    protected changeIcon(icon: Icon)
    {
        if (this.icon.props.href !== null) {
            this.node.setAttribute('href', this.icon.props.href);
        } else {
            this.node.setAttribute('class', this.getIconClass(icon));
        }
    }

    protected getIconClass(icon: Icon)
    {
        return `${icon.props.type} fa-${icon.props.name} fa-${icon.props.size} text-${icon.props.color}`;
    }
}