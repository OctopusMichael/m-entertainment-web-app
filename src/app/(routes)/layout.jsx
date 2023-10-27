import InputSeach from '@/components/InputSeach'
import Navbar from '@/components/Navbar'


export default function layout({children}) {
  return (
    < div  className="bg-darkBlue flex flex-col lg:flex-row lg:py-[10px] ">
        <header>
          <Navbar />
        </header>

        <main  className="  px-[20px] lg:px-[30px] lg:ms-[200px] lg:max-w-[1240px] lg:mx-auto  flex flex-col gap-5 lg:gap-0 overflow-hidden  ">
          <InputSeach />
          {children}
        </main>
      </div>
  )
}
