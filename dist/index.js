(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('formiojs')) :
	typeof define === 'function' && define.amd ? define(['formiojs'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.FormioPlugin = factory(global.Formio));
})(this, (function (require$$0) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var src = {};

	var HelloWorld;
	var hasRequiredHelloWorld;

	function requireHelloWorld () {
		if (hasRequiredHelloWorld) return HelloWorld;
		hasRequiredHelloWorld = 1;
		HelloWorld = function(Formio) {
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

		    return HelloWorldComponent;
		};
		return HelloWorld;
	}

	(function (exports) {
		(function (global, factory) {
		    {
		        factory(require$$0);
		    }
		})(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : commonjsGlobal, function (Formio) {
		    const components = {
		        helloworld: requireHelloWorld()
		    };

		    const CustomModule = {
		        components,
		    };

		    Formio.use(CustomModule);

		    return CustomModule;
		}); 
	} ());

	var index = /*@__PURE__*/getDefaultExportFromCjs(src);

	return index;

}));
//# sourceMappingURL=index.js.map
