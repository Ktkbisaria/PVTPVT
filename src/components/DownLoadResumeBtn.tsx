import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
    
    <Link href={"https://docs.google.com/document/d/1ls-VWWCvsUzc3sJydnQ2GZF9ujGI4HH66CLjIDWlizQ/edit?usp=sharing"} target="_blank" rel="noopener noreferrer" download>
        <HackerBtn label='My Resume' />
      </Link>
  </div>
  )
}

export default DownLoadResumeBtn