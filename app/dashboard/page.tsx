import { ButtonPrimary } from "../ui/buttons";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { kitties}  from '@/app/lib/placeholder-data';
import KittyCard from "../ui/dashboard/kitty-card";
import Banner from "../ui/dashboard/banner-top";

export default function Page() {
  const current_user = "510244a3-2002-3172-8754-ecd3a7b733b9";
  
  return (
    <>
      <Banner />
      <div className="flex flex-col gap-8 mt-8">

        {/* MY KITTIES */}
        <div>
          <div className="flex gap-2">
            <h2 className="text-xl">My Kitties</h2>
            <ButtonPrimary>
              <p>Create a Kitty</p>
              <PlusCircleIcon className='w-6' />
            </ButtonPrimary>
          </div>

          <div className="flex gap-4 overflow-y-auto py-3">
            {
              kitties.map((kitty) => {
                if (kitty.creator_id === current_user && !kitty.closed)
                  return (<KittyCard card={kitty} key={kitty.id} />)
              })
            }
          </div>
        </div>

        {/* OTHER KITTIES */}
        <div>
          <h2 className="text-xl">Other Kitties</h2>
          <div className="flex gap-4 overflow-y-auto py-3">
            {
              kitties.map((kitty) => {
                if (kitty.creator_id !== current_user && !kitty.closed)
                  return (<KittyCard card={kitty} key={kitty.id} />)
              })
            }
          </div>
        </div>

        {/* OLD KITTIES */}
        <div>
          <h2 className="text-xl">Closed Kitties</h2>
          <div className="flex gap-4 overflow-y-auto py-3">
            {
              kitties.map((kitty) => {
                if (kitty.closed)
                  return (<KittyCard card={kitty} key={kitty.id} />)
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}