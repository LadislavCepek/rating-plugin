import IconComponent from "./icon-component";

export default class CancelComponent extends IconComponent
{
    public render()
    {
        super.render();

        this.node = document.createElement('span');
        this.node.id = this.id;
        this.changeIcon(this.icon);

        return this.node;
    }
}