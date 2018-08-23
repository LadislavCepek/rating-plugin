import Component from "./component";
import IconComponent from "./icon-component";
import InputComponent from "./input-component";
import StarComponent from "./star-component";
import Icon from "./icon";

export default class Rating extends Component
{
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

    protected stars: StarComponent[] = [];
    protected input: InputComponent = null;
    protected cancel: IconComponent = null;
    protected clickedStar: StarComponent = null;

    public init()
    {
        super.init();
        
        if (this.value !== null) {
            this.value = this.defaultValue;
        }

        this.parentNode = document.querySelector(this.parentSelector);

        if (!this.parentNode) {
            this.parentNode = document.body;
        }

        this.input = new InputComponent({selector: this.inputSelector, name: this.inputName, value: this.value});

        this.cancel = new IconComponent({className: 'cancel-rating', icon: new Icon(this.cancelIcon)});
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
    }

    protected innerRender()
    {
        let cancelNode = this.cancel.render();

        cancelNode.addEventListener('click', this.onCancelClick.bind(this));

        this.node.appendChild(cancelNode);

        for(let value = this.minValue, n = this.maxValue; value <= n; value++) {
            let star = new StarComponent({
                id: `rating-star-${value}`,
                icon: new Icon(this.icon),
                filledIcon: new Icon(this.filledIcon),
                value: value,
                title: value
            });

            this.stars[value] = star;

            let starNode = star.render();
            starNode.addEventListener('click', this.onClick.bind(this));
            starNode.addEventListener('mouseover', this.onMouseOver.bind(this));
            starNode.addEventListener('mouseout', this.onMouseOut.bind(this));
            
            this.node.appendChild(starNode);
        }

        this.node.appendChild(this.input.render());
    }

    protected onClick(event: any)
    {
        this.clickedStar = this.onChange(event);

        this.input.changeValue(this.clickedStar.value);
    }

    protected onMouseOver(event: any)
    {
        this.onChange(event);
    }

    protected onMouseOut(event: any)
    {
        this.refresh();

        if (this.clickedStar) {
            if (this.fillUp) {
                this.fill(this.clickedStar);
            }
    
            this.clickedStar.fill();
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

        this.clickedStar = null;
    }

    protected fill(currentStar: StarComponent)
    {
        let shouldFill = true;

        this.stars.forEach(star => {
            if (star.id === currentStar.id) {
                shouldFill = false;
            } 

            if (shouldFill) {
                star.fill();
            }  
        });
    }
}
