import { ButtonContainer } from './styles';

// label é o texto exibido no botão e onClick é a função chamada ao clicar (que recebe um evento do tipo MouseEvent e não retorna nada)
const Button = ({label, onClick}: {label: string, onClick: (event: React.MouseEvent<HTMLButtonElement>) => void}) => {
    return (
        <ButtonContainer onClick={onClick} type="button">{label}</ButtonContainer>
    )
}

export default Button;