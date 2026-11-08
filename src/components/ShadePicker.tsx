import { SHADES, Shade } from '../lib/shades'

interface Props { active: Shade; onSelect: (s: Shade) => void }

export default function ShadePicker({ active, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {SHADES.map((s) => (
        <button
          key={s.id}
          onClick={() => onSelect(s)}
          aria-pressed={active.id === s.id}
          className={`reveal w-36 rounded-2xl bg-white p-4 text-left shadow-rose transition duration-300 hover:-translate-y-1.5 hover:shadow-roseLg ${
            active.id === s.id ? 'outline outline-2 outline-offset-4 outline-rose-500' : ''
          }`}
        >
          <span
            className="block h-16 rounded-xl mb-3"
            style={{ background: `linear-gradient(135deg, ${s.color}, color-mix(in srgb, ${s.color} 60%, white))` }}
          />
          <span className="block font-serif text-lg leading-tight">{s.name}</span>
          <span className="text-[10px] tracking-widest text-neutral-400">N° 0{s.id}</span>
        </button>
      ))}
    </div>
  )
}
