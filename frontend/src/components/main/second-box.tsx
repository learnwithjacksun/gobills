import { services } from "@/constants/data";

export default function Secondbox() {
  return (
    <div className=" space-y-4  h-full flex flex-col">
        <h3 className="flex items-center gap-2 font-space text-xl font-medium">Services</h3>

        <ul className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <li
              key={service.title}
              className={`flex flex-col gap-2 shadow-2xl p-4 rounded-2xl bg-background space-y-4 border border-line dark:bg-secondary ${service.shadow}`}
            >
              <div className={`${service.bg} h-10 w-10 center rounded-lg`}>
                <service.icon size={20} className={service.color} />
              </div>
              <span className="font-medium text-sm md:text-base">
                {service.title}
              </span>
            </li>
          ))}
        </ul>
    </div>
  )
}
