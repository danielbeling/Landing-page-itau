import IconSearch from '@/assets/icon-search.svg';
import Image from 'next/image'
export default function Search() {
  return (
    <div className='flex items-center gap-4'>
      <Image
        src={IconSearch}
        alt='Search'
      />
      <input
        type="text"
        className="bg-transparent outline-none pr-5 text-white placeholder-white"
        placeholder="Buscar"
      />

    </div>
  )
}