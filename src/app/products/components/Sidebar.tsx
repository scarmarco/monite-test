import {
  Cog8ToothIcon,
  UserIcon,
  ChevronUpDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const NAV_ITEMS = [
  { id: 1, Icon: Cog8ToothIcon, text: "Dashboard" },
  { id: 2, Icon: Cog8ToothIcon, text: "Transactions" },
  { id: 3, Icon: Cog8ToothIcon, text: "Invoices" },
  { id: 4, Icon: Cog8ToothIcon, text: "Incoming bills" },
  { id: 5, Icon: Cog8ToothIcon, text: "Expenses", RightIcon: ChevronRightIcon },
  { id: 6, Icon: Cog8ToothIcon, text: "Accounting" },
  { id: 7, Icon: Cog8ToothIcon, text: "Team" },
  { id: 8, Icon: Cog8ToothIcon, text: "Other", RightIcon: ChevronRightIcon },
  { id: 9, Icon: Cog8ToothIcon, text: "Settings", RightIcon: ChevronRightIcon },
];

export default function Sidebar() {
  return (
    <aside className="bg-gray-50 w-72 p-6">
      <nav>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100">
            <UserIcon className="size-8" />
          </div>
          <span className="flex-1 text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            Monite UG (has ellipsis here)
          </span>
          <ChevronUpDownIcon className="size-5 text-gray-400" />
        </div>
        <ul className="flex flex-col gap-4 text-gray-400 font-semibold">
          {NAV_ITEMS.map(({ id, Icon, text, RightIcon }) => (
            <li key={id} className="flex items-center gap-2">
              <Icon className="size-6" />
              <span className="flex-1">{text}</span>
              {RightIcon && <RightIcon className="size-4" />}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
