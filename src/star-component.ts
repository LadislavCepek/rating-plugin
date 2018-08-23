import IconComponent from "./icon-component";
import Icon from "./icon";

export default class StarComponent extends IconComponent
{
    public filledIcon: Icon;
    public value: number;

    public refresh()
    {
        this.changeIcon(this.icon);
    }

    public fill()
    {
        this.changeIcon(this.filledIcon);
    }

    protected setDefaultProps(): void
    {
        this.icon = new Icon({name: 'star', size: Icon.SIZE_XXL, type: 'far'})
        this.filledIcon = new Icon({name: 'star', size: Icon.SIZE_XXL})
        this.value = null;
    }
}
