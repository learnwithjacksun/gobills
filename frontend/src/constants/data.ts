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
        bg: "bg-blue-500/10",
        color: "text-blue-500 dark:text-blue-400"
    },
    {
        icon: Wifi,
        title: "Buy Data",
        href: "/data",
        bg: "bg-green-500/10",
        color: "text-green-500"
    },
    {
        icon: Plug,
        title: "Electricity",
        href: "/electricity",
        bg: "bg-yellow-500/10",
        color: "text-yellow-500 dark:text-yellow-400"
    },
    {
        icon: Tv,
        title: "Cable TV",
        href: "/cable",
        bg: "bg-purple-500/10",
        color: "text-purple-500"
    },
    {
        icon: CreditCard,
        title: "USD Virtual Card",
        href: "/usd",
        bg: "bg-red-500/10",
        color: "text-red-500"
    },
    {
        icon: Phone,
        title: "Virtual Number",
        href: "/number",
        bg: "bg-orange-500/10",
        color: "text-orange-500 dark:text-orange-400"
    },
]