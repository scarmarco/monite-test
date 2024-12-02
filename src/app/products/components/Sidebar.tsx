import {
  Cog8ToothIcon,
  UserIcon,
  ChevronUpDownIcon,
  ChevronRightIcon,
  ArchiveBoxArrowDownIcon,
  ArrowsRightLeftIcon,
  NewspaperIcon,
  BanknotesIcon,
  PresentationChartBarIcon,
  UsersIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

const NAV_ITEMS = [
  { id: 1, Icon: ArchiveBoxArrowDownIcon, text: "Dashboard" },
  { id: 2, Icon: ArrowsRightLeftIcon, text: "Transactions" },
  { id: 3, Icon: NewspaperIcon, text: "Invoices" },
  { id: 4, Icon: BanknotesIcon, text: "Incoming bills" },
  { id: 5, Icon: NewspaperIcon, text: "Expenses", RightIcon: ChevronRightIcon },
  { id: 6, Icon: PresentationChartBarIcon, text: "Accounting" },
  { id: 7, Icon: UsersIcon, text: "Team" },
  { id: 8, Icon: PlusCircleIcon, text: "Other", RightIcon: ChevronRightIcon },
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
