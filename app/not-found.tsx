import { NotFoundIcon } from "@/icons";

import { NotFoundNav } from "../src/components/NotFoundNav";

const NotFound = () => (
  <div className='flex min-h-svh'>
    <div className='m-auto text-center space-y-5'>
      <NotFoundIcon />
      <h1 className='font-bold text-4xl'>Упс...</h1>
      <p className=''>Такой страницы не существует на нашем сайте</p>
      <NotFoundNav />
    </div>
  </div>
);

export default NotFound;
