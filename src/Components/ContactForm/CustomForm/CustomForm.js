import { formStyles} from './styles'



export const CustomForm = (props) => (
    <form style = {formStyles} onSubmit={props.handleFormSubmit}>
        {props.children}
    </form>)



