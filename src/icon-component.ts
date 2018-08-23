import Component from "./component";
import Icon from "./icon";

export default class IconComponent extends Component
{
    public icon: Icon;
    public title: string;

    public render() : HTMLElement
    {
        super.render();

        this.createIcon();

        return this.node;
    }

    protected setDefaultProps()
    {
        this.icon = null;
        this.title = null;
    }

    protected createIcon()
    {
        if (this.icon === null) {
            this.icon = new Icon();
        }

        if (this.icon.src !== null) {
            this.node = document.createElement('img');
            this.node.setAttribute('src', this.icon.src);
        } else {
            this.node = document.createElement('span');
        }

        if (this.id) {
            this.node.setAttribute('id', this.id);
        }

        if(this.title) {
            this.node.setAttribute('title', this.title);
        }

        this.changeIcon(this.icon);

        return this.node;
    }

    protected changeIcon(icon: Icon)
    {
        if (icon.src !== null) {
            this.node.setAttribute('src', icon.src);
        } else {
            this.node.setAttribute('class', this.getIconClass(icon));
        }
    }

    protected getIconClass(icon: Icon)
    {
        return `${icon.type} fa-${icon.name} fa-${icon.size} text-${icon.color}`;
    }
}