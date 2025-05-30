import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './HackerBtn'



function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
<a
  href="https://drive.google.com/file/d/1XqBMV7B4izNmmOZvIAsMTN9r_BJZ1Gym/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <HackerBtn label="My Resume" />
</a>
    </div>
  )
}

export default DownLoadResumeBtn
