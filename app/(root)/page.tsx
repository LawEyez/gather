import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="bg-neutral-50 h-full w-full bg-dotted-pattern bg-contain py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-5xl md:text-6xl tracking-tight">Do events like never before</h1>
            <p className="">Create, book and attend events from anywhere in the world. Join Gather and change the way you event!</p>
            <Button>
              <Link href="#events">Start exploring</Link>
            </Button>
          </div>

          <Image
            priority
            src="/hero.svg"
            alt="Hero Image"
            width={600}
            height={400}
          />
        </div>
      </section>

      <section id='events' className="container my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="text-4xl font-bold tracking-tight w-1/2">
          Trusted by thousands of event lovers...
        </h2>

        <div className=""></div>
      </section>
    </>
  )
}
