import { Formio } from 'formiojs';
import components from './components';

const CustomModule = {
    components,
};

Formio.use(CustomModule);

export default CustomModule;