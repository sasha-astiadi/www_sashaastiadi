import { TbLanguage } from 'react-icons/tb'
import ReactCountryFlag from 'react-country-flag'

interface LanguageItem {
  name: string
  countryCode: string
  bgColor: string
}

function LanguageBadge({ item }: { item: LanguageItem }) {
  return (
    <li className="flex flex-col items-center gap-2">
      <div
        className="relative mt-1 h-10 w-10 flex-none overflow-hidden rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0"
        style={{ backgroundColor: item.bgColor }}
      >
        <ReactCountryFlag
          svg
          countryCode={item.countryCode}
          className="absolute inset-0 block"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            transform: 'scale(1.5)',
            transformOrigin: 'center',
          }}
          aria-label={item.name}
        />
      </div>
      <div className="text-xs text-zinc-600 dark:text-zinc-400">{item.name}</div>
    </li>
  )
}

export function WorkingLanguages() {
  const languages: LanguageItem[] = [
    { name: 'English', countryCode: 'GB', bgColor: '#FAFAFA' },
    { name: 'Chinese', countryCode: 'CN', bgColor: '#FAFAFA' },
    { name: 'German', countryCode: 'DE', bgColor: '#FAFAFA' },
    { name: 'Indonesian', countryCode: 'ID', bgColor: '#FAFAFA' },
    { name: 'Spanish', countryCode: 'ES', bgColor: '#FAFAFA' },
  ]

  return (
    <div className="rounded-xl bg-white p-6 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
      <h2 className="flex text-base font-normal text-zinc-900 dark:text-zinc-100">
        <TbLanguage className="h-9 w-9 flex-none text-[#9F9FA9] dark:text-[#71717C]" />
        <span className="ml-3">Languages</span>
      </h2>

      <ol className="mt-6 grid grid-cols-5 gap-4">
        {languages.map((item) => (
          <LanguageBadge key={item.name} item={item} />
        ))}
      </ol>
    </div>
  )
}
