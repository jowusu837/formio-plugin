(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('formiojs')) :
    typeof define === 'function' && define.amd ? define(['formiojs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.FormioPlugin = factory(global.Formio));
})(this, (function (Formio) { 'use strict';

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

    var components = {
        helloworld: HelloWorldComponent,
    };

    const CustomModule = {
        components,
    };

    Formio.Formio.use(CustomModule);

    return CustomModule;

}));
//# sourceMappingURL=index.umd.js.map
