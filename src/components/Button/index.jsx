import { ButtonRed, ButtonWhite } from './styles'
const Button = ({ children, red, ...props }) => {
  return (
    <>
      {red ? (
        <ButtonRed {...props}>{children}</ButtonRed>
      ) : (
        <ButtonWhite {...props}>{children}</ButtonWhite>
      )}
    </>
  )
}

export default Button
