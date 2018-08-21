import IconComponent from "./icon-component";
import Icon from "./icon";

export default class StarComponent extends IconComponent
{
    public filledIcon: Icon;
    public value: number;

    public constructor(id: string, icon: Icon, filledIcon: Icon, value: number, config: any = null)
    {
        super(id, icon, config);

        this.filledIcon = filledIcon;
        this.value = value;

        this.init();
    }

    public refresh()
    {
        this.changeIcon(this.icon);
    }

    public fill()
    {
        this.changeIcon(this.filledIcon);
    }
}
