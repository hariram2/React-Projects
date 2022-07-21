import React from 'react';
import Charts from '../components/Charts';
import Icons from '../components/Icons';
// import Download from '../components/Download';
import SideMenu from './SideMenu';


export default function 
() {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <SideMenu />
                </div>
                 <div className='col-md-5'>
                    <Charts />
                </div>
                <div className='col-md-5'>
                    <Icons />
                </div>
            </div>
        </div>
    </div>
  )
}
