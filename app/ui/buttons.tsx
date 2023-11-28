import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonPrimary({children, className, ...rest}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex items-center gap-2 bg-pacific-blue hover:bg-opal text-dark-white font-normal py-1 px-4 rounded-full',
        className,
    )}
    >
      {children}
    </button>
  )
}

export function ButtonScondary({children, className, ...rest}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex items-center gap-2 bg-transparent hover:bg-pacific-blue text-pacific-blue font-normal hover:text-white py-1 px-4 border border-pacific-blue hover:border-transparent rounded-full',
        className,
      )}
    >
      {children}
    </button>
  )
}



// const Button = ({text, btType, icon, handleClick}) => {
//   const buttonPrimary ="flex items-center gap-2 bg-pacific-blue hover:bg-opal text-white font-normal py-1 px-4 rounded-full"
//   const buttonPrimary2 ="flex items-center gap-2 bg-coral hover:bg-romantic text-white font-normal py-1 px-4 rounded-full"
//   const buttonSecondary = "flex items-center gap-2 bg-transparent hover:bg-pacific-blue text-pacific-blue font-normal hover:text-white py-1 px-4 border border-pacific-blue hover:border-transparent rounded-full"
//   const buttonBig = "flex items-center gap-2 bg-pacific-blue hover:bg-opal text-white font-normal py-4 px-6 rounded-full"
//   const buttonSecondaryBig = "flex items-center gap-2 bg-transparent hover:bg-pacific-blue text-pacific-blue font-normal hover:text-white py-4 px-6 border border-pacific-blue hover:border-transparent rounded-full"
//   const buttonWithoutBorder = "flex items-center gap-2 rounded-full py-1 px-4 font-normal text-pacific-blue transition-all hover:underline active:bg-pacific blue"
//   const buttonWithValidation = "flex items-center gap-2 bg-white hover:bg-magic-mint text-white font-normal py-3 px-3 rounded-full border-8 border-grey"
//   const buttonValidated = "flex items-center gap-2 bg-magic-mint hover:bg-pacific-blue text-white font-normal py-3 px-3 rounded-full border-8 border-grey"
//   const buttonWithValidationWhite = "flex items-center gap-2 bg-pacific-blue hover:bg-magic-mint text-white font-normal py-3 px-3 rounded-full border-8 border-solid border-white"
//   const buttonValidatedWhite = "flex items-center gap-2 bg-magic-mint hover:bg-pacific-blue text-white font-normal py-3 px-3 rounded-full border-8 border-solid border-white"
//   const buttonCut = "flex items-center gap-2 bg-pacific-blue hover:bg-opal text-white font-normal py-1 px-4 rounded-r-full"
//   const buttonFilter = "flex items-center gap-2 bg-transparent hover:bg-coral  text-[10px] hover:text-white py-1 px-4 border border-gray-600 hover:border-transparent rounded-full"
//   const buttonFilterSelected = "flex items-center gap-2 bg-pacific-blue hover:bg-coral  text-[10px] text-white py-1 px-4 border border-transparent  hover:border-transparent rounded-full"

//   return (
//       <button
//           className={btType === "primary" ? buttonPrimary
//               : btType === "primary2" ? buttonPrimary2
//                   : btType === "secondary" ? buttonSecondary
//                       : btType === "big" ? buttonBig
//                           : btType === "sbig" ? buttonSecondaryBig
//                               : btType === "w/border" ? buttonWithoutBorder
//                                   : btType === "w/validation" ? buttonWithValidation
//                                       : btType === "validated" ? buttonValidated
//                                           : btType === "w/validwhite" ? buttonWithValidationWhite
//                                               : btType === "cut" ? buttonCut
//                                                   : btType === "selected" ? buttonFilterSelected
//                                                       : btType === "filter" ? buttonFilter : buttonValidatedWhite  }
//           onClick={handleClick}
//       > {text} {icon} </button>
//   )
// }