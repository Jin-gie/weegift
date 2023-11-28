import { ButtonPrimary, ButtonScondary } from "../buttons"

export default function Banner() {
  return (
    <div className="bg-romantic w-full flex justify-end gap-4 flex-wrap p-3 rounded-lg">
      <form className='flex'>
        <input
            placeholder='Invite link'
        />
        <ButtonPrimary className="rounded-l-none">
          Rejoindre
        </ButtonPrimary>
      </form>
      <ButtonScondary className="bg-white">
        Rembourser toutes les cagnottes (25€)
      </ButtonScondary>
    </div>
  )
}