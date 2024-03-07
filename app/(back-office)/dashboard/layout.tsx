import DashBoardHead from '@/components/dashboard/DashBoardHead'
import React, { Children } from 'react'


interface RootLayoutProps {
    children: React.ReactNode
  }
  export default function Layout({ children }:RootLayoutProps) {
    return (
    <div>
    <div className='sticky top-0 h-[10vh] z-[1000]'>
    <DashBoardHead/>
    </div>
    <div className='p-4'>
    {children}
    </div>
    </div>
  )
}
