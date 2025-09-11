import { services } from "@/constants/data";
import { Boxes } from "lucide-react";

export default function Secondbox() {
  return (
    <div className="bg-background space-y-4 border border-line dark:bg-secondary rounded-xl p-4 h-full flex flex-col">
        <h3 className="flex items-center gap-2 font-space text-xl font-medium uppercase"><Boxes className="text-yellow-500" />Services</h3>

        <ul className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <li
              key={service.title}
              className={`${service.bg} drop-shadow-xl rounded-xl p-6 md:space-y-8 space-y-4 `}
            >
              <service.icon size={30} className={service.color} />
              <span className="font-medium text-sm md:text-base">
                {service.title}
              </span>
            </li>
          ))}
        </ul>
    </div>
  )
}
