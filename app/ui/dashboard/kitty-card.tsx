import { Kitty } from "@/app/lib/definitions"
import ImgCagnotte from '@/public/assets/cagnotte.jpeg';
import Image from "next/image";
import { cutText } from "@/app/lib/utils";
import { ButtonPrimary } from "../buttons";
import {
  GiftIcon,
  CurrencyEuroIcon
} from "@heroicons/react/24/outline";

export default function KittyCard({card} : {card : Kitty}) {
  return (
    <div className='card-shadow rounded-2xl p-3 bg-white relative w-fit'>
      <div className='flex gap-4 w-full'>
        <div className='w-28 h-28'>
          <Image src={ImgCagnotte} alt="Cagnotte" className="w-28 h-28 shrink-0 rounded-2xl" />
        </div>
        <div className=''>
          <div className='h-full flex flex-col justify-between'>
            <div>
              <div className='flex items-center w-full justify-between'>
                <p>{cutText(card.title, 20)}</p>
                { card.contain_gifts ? <GiftIcon className='w-6 text-text-subtle'/> : <CurrencyEuroIcon className='w-6 text-text-subtle' /> }
              </div>
              <p className='text-text-subtle'>{"3"} participant(s)</p>
            </div>
            <div className='flex gap-2'>
              <ButtonPrimary disabled>Accéder</ButtonPrimary>
              <ButtonPrimary disabled className="bg-white text-pacific-blue underline underline-offset-2">Participer</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>

      {/* Somme */}
      <div className='absolute bottom-6 left-0 bg-white text-pacific-blue text-center px-2 rounded-r-2xl card-shadow'>
        {card.current_amount} <span className='text-xs'>€</span>
      </div>
    </div>
  )
}