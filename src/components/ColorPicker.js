import { Components } from 'formiojs';
const FieldComponent = Components.components.field;

class ColorPickerComponent extends FieldComponent {
    static schema(...extend) {
        return FieldComponent.schema({
            type: 'colorpicker',
            label: 'Color Picker',
            key: 'colorpicker',
            inputType: 'color',
            ...extend,
        });
    }

    static get builderInfo() {
        return {
            title: 'Color Picker',
            group: 'basic',
            icon: 'paint-brush',
            weight: 70,
            schema: ColorPickerComponent.schema()
        };
    }

    get defaultSchema() {
        return ColorPickerComponent.schema();
    }

    render() {
        return super.render(this.renderTemplate('input', {
            input: {
                type: 'input',
                ref: this.component.key,
                attr: {
                    id: this.component.key,
                    class: 'form-control',
                    type: 'color',
                }
            }
        }));
    }

    attach(element) {
        const input = element.querySelector('input[type="color"]');
        this.addEventListener(input, 'change', (event) => {
            this.setValue(event.target.value);
        });
        return super.attach(element);
    }
}

export default ColorPickerComponent;