import Component from "./component";
import IconComponent from "./icon-component";
import InputComponent from "./input-component";
import StarComponent from "./star-component";
import Icon from "./icon";

export default class Rating extends Component
{
    public count: number;
    public value: number;
    public minValue: number;
    public maxValue: number;
    public defaultValue: number;
    public parentSelector: string;
    public inputSelector: string;
    public inputName: string;
    public icon: object;
    public filledIcon: object;
    public cancelIcon: object;
    public fillUp: boolean;
    public readonly: boolean;
    public cancelHint: string;
    public hints: Array<string>;
    public icons: any;
    public filledIcons: any;

    protected stars: StarComponent[] = [];
    protected input: InputComponent = null;
    protected cancel: IconComponent = null;
    protected currentStar: StarComponent = null;

    public init()
    {
        super.init();

        if (this.value === null) {
            this.value = this.defaultValue;
        }

        this.parentNode = document.querySelector(this.parentSelector);

        if (!this.parentNode) {
            this.parentNode = document.body;
        }

        this.input = new InputComponent({selector: this.inputSelector, name: this.inputName, value: this.value});

        let cancelConfig = {
            className: 'cancel-rating',
            icon: new Icon(this.cancelIcon)
        }

        cancelConfig['title'] = this.cancelHint ? this.cancelHint : 'Cancel';

        this.cancel = new IconComponent(cancelConfig);
    }

    public render() 
    {
        super.render();

        this.node = document.createElement('div');
        this.node.setAttribute('class', 'stars-container');

        this.parentNode.appendChild(this.node);

        this.innerRender();
    }

    protected setDefaultProps(): void
    {
            this.parentSelector = null;
            this.inputName = null;
            this.inputSelector = null;
            this.minValue = 1; 
            this.maxValue = 5; 
            this.defaultValue = 0; 
            this.icon = { name: 'star', size: Icon.SIZE_XXL, type: 'far' }; 
            this.filledIcon = { name: 'star', size: Icon.SIZE_XXL };
            this.cancelIcon = { name: 'ban', size: Icon.SIZE_XL };
            this.fillUp = true;
            this.value = null;
            this.readonly = false;
            this.cancelHint = null;
            this.hints = null;
            this.icons = null;
            this.filledIcons = null;
            this.count = null;
    }

    protected innerRender()
    {
        let inputNode = this.input.render();
        this.value = this.input.value;

        if (!this.readonly) {
            let cancelNode = this.cancel.render();

            cancelNode.addEventListener('click', this.onCancelClick.bind(this));

            this.node.appendChild(cancelNode);
        }
        
        let count = this.count ? this.count : this.maxValue

        let hints = null;
        if (this.hints && this.hints.length === count) {
            hints = this.hints;
        }

        for(let value = this.minValue; value <= count; value++) {
            let index = value - this.minValue;

            let starConfig = {
                id: `rating-star-${value}`,
                value: value,
            }

            if (this.icons !== null) {
                starConfig['icon'] = new Icon(this.icons[index]);
            } else {
                starConfig['icon'] = new Icon(this.icon);
            }

            if (this.filledIcons !== null) {
                starConfig['filledIcon'] = new Icon(this.filledIcons[index]);
            } else {
                starConfig['filledIcon'] = new Icon(this.filledIcon);
            }

            if (hints) {
                starConfig['title'] = hints[index];
            } else {
                starConfig['title'] = value;
            }

            let star = new StarComponent(starConfig);

            this.stars[value] = star;

            let starNode = star.render();

            if (!this.readonly) {
                starNode.addEventListener('click', this.onClick.bind(this));
                starNode.addEventListener('mouseover', this.onMouseOver.bind(this));
                starNode.addEventListener('mouseout', this.onMouseOut.bind(this));
            }
            
            this.node.appendChild(starNode);
        }
        
        if (this.value >= this.minValue && this.value <= this.maxValue) {
            if (this.stars[this.value] !== undefined) {
                this.currentStar = this.stars[this.value]
                
                if (this.fillUp) {
                    this.fill(this.currentStar);
                } else {
                    this.currentStar.fill();
                }
            }
        }

        this.node.appendChild(inputNode);
    }

    protected onClick(event: any)
    {
        this.currentStar = this.onChange(event);

        this.input.changeValue(this.currentStar.value);
    }

    protected onMouseOver(event: any)
    {
        this.onChange(event);
    }

    protected onMouseOut(event: any)
    {
        this.refresh();

        if (this.currentStar) {
            if (this.fillUp) {
                this.fill(this.currentStar);
            }
    
            this.currentStar.fill();
        }
    }

    protected onChange(event: any)
    {
        event = event || window.event;
        
        let node = event.target || event.srcElement;

        let currentStar: StarComponent = null;
        this.stars.forEach(star => {
            star.refresh();

            if (star.id === node.id) {
                currentStar = star;
            } 
        });

        if (!currentStar) {
            return;
        }

        if (this.fillUp) {
            this.fill(currentStar);
        }

        currentStar.fill();

        return currentStar;
    }

    protected onCancelClick()
    {
        this.resetToDefault();
    }

    protected refresh()
    {
        this.stars.forEach(star => {
            star.refresh();
        });
    }

    protected resetToDefault()
    {
        this.refresh();

        this.value = this.defaultValue;
        this.input.changeValue(this.value)

        this.currentStar = null;
    }

    protected fill(currentStar: StarComponent)
    {
        let shouldFill = true;

        this.stars.forEach(star => {
            if (shouldFill) {
                star.fill();
            }

            if (star.id === currentStar.id) {
                shouldFill = false;
            }   
        });
    }
}
