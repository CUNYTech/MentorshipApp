import React, {Component} from 'react';

const DEFAULT_HEIGHT = 20;

class Textarea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            height: DEFAULT_HEIGHT,
            value: "",
        };

        this.setValue = this.setValue.bind(this);
        this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
    }

    componentDidMount() {
        this.mounted = true;

        this.setFilledTextareaHeight();
    }
    /*componentDidUpdate(){
        this.updated = true;
        this.setScrollHeight();
    }*/

    setFilledTextareaHeight() {
        if (this.mounted) {
            const element = this.ghost;

            this.setState({
                height: element.clientHeight,
            });
        }
    }
    

    setValue(event) {
        const { value }= event.target;

        this.setState({ value });
    }

    getExpandableField() {
        const isOneLine = this.state.height <= DEFAULT_HEIGHT;
        const { height, value } = this.state;

        return (
            <div>
                <textarea
                    className="textarea"
                    name="textarea"
                    id="textarea"
                    autoFocus={true}
                    defaultValue={value}
                    style={{
                        height,
                        resize: isOneLine ? "none" : null
                    }}
                    onChange={this.setValue}
                    onKeyUp={this.setFilledTextareaHeight}
                />
            </div>
        );
    }

    getGhostField() {
        return (
            <div
                className="textarea textarea--ghost"
                ref={(c) => this.ghost = c}
                aria-hidden="true"
            >
                {this.state.value}
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.getExpandableField()}
                {this.getGhostField()}
            </div>
        );
    }
}



export default Textarea
