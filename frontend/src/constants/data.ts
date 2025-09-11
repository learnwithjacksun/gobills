import { CreditCard, Phone, PhoneCall, Plug, Tv, Wifi } from "lucide-react"

export const libraries = [
    "React Router",
    "Tailwind CSS",
    "Lucide React",
    "React Hook Form",
    "React Query",
    "Zustand",
    "Axios",
    "Zod",
    "Sonner",
    "Framer Motion",
]


export const heroData = {
    title: "Quick, Simple Bill Payments.",
    description: "Pay your bills quickly and easily with Gobills. We offer a wide range of bill payments, including electricity, water, gas, internet, and more.",
}


export const services = [
    {
        icon: PhoneCall,
        title: "Airtime",
        href: "/airtime",
        bg: "bg-blue-500/10 dark:bg-blue-500/30",
        color: "text-blue-500 dark:text-blue-400"
    },
    {
        icon: Wifi,
        title: "Buy Data",
        href: "/data",
        bg: "bg-green-500/10 dark:bg-green-500/30",
        color: "text-green-500"
    },
    {
        icon: Plug,
        title: "Electricity",
        href: "/electricity",
        bg: "bg-amber-500/10 dark:bg-amber-500/30",
        color: "text-amber-500 dark:text-amber-400"
    },
    {
        icon: Tv,
        title: "Cable TV",
        href: "/cable",
        bg: "bg-violet-500/10 dark:bg-violet-500/30",
        color: "text-violet-500"
    },
    {
        icon: CreditCard,
        title: "USD Virtual Card",
        href: "/usd",
        bg: "bg-red-500/10 dark:bg-red-500/30",
        color: "text-red-500"
    },
    {
        icon: Phone,
        title: "Virtual Number",
        href: "/number",
        bg: "bg-orange-500/10 dark:bg-orange-500/30",
        color: "text-orange-500 dark:text-orange-400"
    },
]