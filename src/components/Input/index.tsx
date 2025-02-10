import {InputContainer} from './styles'

const Input = ({value}: {value: string}) => {
    return (
        <InputContainer>
        <input disabled value={value} />
        </InputContainer>
    )
}

export default Input;