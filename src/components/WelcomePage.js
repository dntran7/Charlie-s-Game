"use client";
import { Button } from './ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function WelcomePage({handleClick}){
    let desc = "Charlie wants you to play a memory game with his photos. Match pairs by flipping two photos at a time. If you don't... Charlie will be really sad :(";
    let title = "Welcome to Charlie's Game";
    return (
        
        <div>
            <Card className="smallScreen:w-[375px] smallScreen:h-[575px] max-w-4xl">
                <CardHeader>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl header-center">{title}</h1>
                </CardHeader>
                <CardContent>
                    <p className='smallScreen:text-lg text-xl font-bold tracking-wide welcome-desc'>{desc}</p>
                </CardContent>
                <CardFooter className="smallScreen:grid smallScreen:grid-flow-row flex justify-center gap-7">
                    <Button className="py-9 px-9 btn-grad" onClick={() => handleClick()}>
                    <p className='text-lg font-semibold	tracking-widest'>I wanna play!</p>
                        </Button>
                    <Button className="py-9 px-9 btn-grad" onClick={() => handleClick()}>
                    <p className='text-lg font-semibold tracking-widest'>I REALLY wanna play!</p>
                        </Button>
                </CardFooter>
            </Card>
        </div>
    )
} 