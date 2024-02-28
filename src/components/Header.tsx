import Image from 'next/image';

import Logo from '@/assets/logo.svg'
import ItemMenu from './ItemMenu';
import Search from './Search';
import IconUser from '@/assets/icon-user.svg';
import Container from './Container';


export default function Header() {
  return (
    <header className='flex items-center w-full h-20 bg-primary-orange'>
      <Container>
        <div className='flex flex-1 items-center justify-between'>
          <div className='flex gap-14 items-center'>
            <Image 
            src={Logo} 
            alt={'Logo'}
          />
          <ul className='flex items-center gap-14'>
            <li>
              <ItemMenu 
              name= 'Para você'/>
            </li>
            <li>
              <ItemMenu 
              name= 'Para empresas'/>
            </li>
            <li>
              <ItemMenu 
              name= 'Serviços'/>
            </li>
            <li>
              <ItemMenu 
              name= 'Ajuda'/>
            </li>
          </ul>
          </div>
          <div>
            <Search/>
          </div>
        </div>
        <button className='flex items-center gap-4 bg-primary-blue h-20 p-6'>
          <Image src={IconUser} alt='icon user'/>
            <span className='text-white font-bold'>Acessar Conta</span>
          </button>
      </Container>
    </header>
  )
}