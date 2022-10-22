import Link from 'next/link';
import { useRouter } from 'next/router';
import { MagnifyingGlass } from 'phosphor-react';

interface HeaderProps {
  onSearch: (value: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center">
      <label htmlFor="search" className="flex items-center text-zinc-500 gap-2 dark:bg-zinc-200 bg-zinc-800 w-80 rounded-lg p-2 border-2 dark:focus-within:border-zinc-50 focus-within:border-zinc-300">
        <MagnifyingGlass size={20} />
        <input
          onChange={(ev) => onSearch(ev.target.value.toLowerCase())}
          id="search"
          placeholder="Avaí, São Paulo, Santos..."
          className="bg-transparent flex-1 outline-none"
        />
      </label>

      <div className="flex gap-4">
        <Link href="/">
          <a className={`dark:text-zinc-100 text-zinc-900 pointer text-md ${router.asPath === "/" && "font-bold"}`}>Ao vivo</a>
        </Link>
        <Link href="/finished">
          <a className={`dark:text-zinc-100 text-zinc-900 pointer text-md ${router.asPath === "/finished" && "font-bold"}`}>Encerrados</a>
        </Link>
      </div>
    </header>
  )
}