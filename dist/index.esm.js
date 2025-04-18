import Formio, { Components, Formio as Formio$1 } from 'formiojs';

/**
 * Create a Hello World component and extend from the HTMLComponent.
 */
class HelloWorldComponent extends Formio.Components.components.htmlelement {
    /**
     * Define the default schema to change the type and tag and label. 
     */
    static schema(...extend) {
        return Formio.Components.components.htmlelement.schema({
            label: 'Hello World',
            type: 'helloworld',
            tag: 'h1'
        }, ...extend);
    }

    static get builderInfo() {
        return {
            title: 'Hello World',
            group: 'layout',
            icon: 'code',
            weight: 2,
            documentation: '/userguide/#html-element-component',
            schema: HelloWorldComponent.schema()
        };
    }
}

/**
 * Change the edit form to make the "tag" component a select dropdown
 * instead of a textfield so that they can only configure the "h2" fields.
 */
HelloWorldComponent.editForm = (...args) => {
    const editForm = Formio.Components.components.htmlelement.editForm(...args);
    const tagComponent = Formio.Utils.getComponent(editForm.components, 'tag');
    tagComponent.type = 'select';
    tagComponent.dataSrc = 'values';
    tagComponent.data = {
        values: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
            { label: 'H5', value: 'h5' }
        ]
    };
    return editForm;
};

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

var components = {
    helloworld: HelloWorldComponent,
    colorpicker: ColorPickerComponent,
};

const CustomModule = {
    components,
};

Formio$1.use(CustomModule);

export { CustomModule as default };
//# sourceMappingURL=index.esm.js.map
