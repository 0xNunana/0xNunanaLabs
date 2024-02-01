export type ServiceProp = {
    id:number
    title:string 
    logo:string 
    details: string
    bgColor?:string
    textColor?:string
}

export const ServiceInfo=[
    {id:1,
        title:'Thinking and design',
        logo:'/think.png',
        details:'Branding Strategy, Art Direction, UI/UX, Motion',
        bgColor:'red-500',
        textColor:'black'
    },
    {id:2,
        title:'Development and coding',
        logo:'/code.png',
        details:'React, NodeJS, Typescript, React Native',
        bgColor:'0xblue',
        textColor:'white'
    },
    {id:3,
        title:'SEO / MARKETING & ADVERTISEMENT',
        logo:'/Seo.png',
        details:'SEO, Google Ads,Facebook Ads,Tiktok,Instagram',
        bgColor:'0xseo',
        textColor:'black'
    },
]