import React from 'react'
import Form from './Form'
import Balance from './Balance'
import {Chart} from '@/components/Chart'

import WithAuth from '../../../../HOCs/WithAuth'

function Futures() {
  return (
    <div className='md:grid grid-cols-[4fr_1fr] grid-rows-[1fr_3fr_3fr] w-full flex flex-col gap-4 *:rounded-md *:shadow-md *:shadow-secondary-color *:backdrop-blur-sm'>
      <div className='row-start-1 row-end-4 col-start-1 min-w-[60vw] h-[40vh] md:h-auto'>
        <Chart></Chart>
      </div>
      <div className='row-start-1 row-end-2 col-start-2'>
        <Balance available={1000} inMarket={100}></Balance>
      </div>
      <div className='row-start-2 row-end-3'>
        <Form></Form>
      </div>
      <div className='row-start-3 row-end-4'></div>
    </div>
  )
}

export default () => <WithAuth><Futures></Futures></WithAuth>