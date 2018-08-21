import Component from "./component";
import IconComponent from "./icon-component";
import InputComponent from "./input-component";
import StarComponent from "./star-component";
import Icon from "./icon";

export default class Rating extends Component
{
    public value = 0;

    protected stars: StarComponent[] = [];
    protected input: InputComponent = null;
    protected cancel: IconComponent = null;
    protected clickedStar: StarComponent = null;

    public constructor(config: any)
    {
        super(config);

        this.props = {
            id: null,
            parentSelector: null,
            inputName: null,
            minValue: 1, 
            maxValue: 5, 
            defaultValue: 0, 
            icon: new Icon({size: Icon.SIZE_XXL, type: 'far'}), 
            filledIcon: new Icon({size: Icon.SIZE_XXL}),
            cancelIcon: new Icon({name: 'ban', size: Icon.SIZE_XL}),
            fillUp: true
        }

        this.value = this.props.defaultValue;
        
        this.init();
    }

    public init()
    {
        super.init();
        
        this.parentNode = document.querySelector(this.props.parentSelector);
        
        this.input = new InputComponent(this.props.inputName, this.value.toString());

        this.cancel = new IconComponent('cancel', this.props.cancelIcon);
    }

    public render() 
    {
        super.render();

        if (!this.parentNode) {
            return;
        }

        this.node = document.createElement('div');
        this.node.setAttribute('class', 'form-group');

        this.parentNode.appendChild(this.node);

        this.innerRender();
    }

    protected innerRender()
    {
        let cancelNode = this.cancel.render();

        cancelNode.addEventListener('click', this.onCancelClick.bind(this));

        this.node.appendChild(cancelNode);

        for(let value = this.props.minValue, n = this.props.maxValue; value <= n; value++) {
            let star = new StarComponent(`rating-star-${value}`, this.props.icon, this.props.filledIcon, value);

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

        this.input.changeValue(this.clickedStar.value.toString());
    }

    protected onMouseOver(event: any)
    {
        this.onChange(event);
    }

    protected onMouseOut(event: any)
    {
        this.refresh();

        if (this.clickedStar) {
            if (this.props.fillUp) {
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

        if (this.props.fillUp) {
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

        this.value = this.props.defaultValue;
        this.input.changeValue(this.value.toString())

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
