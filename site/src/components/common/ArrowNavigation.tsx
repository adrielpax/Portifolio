import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

type Props = {
  index: number
  setIndex: (val: number) => void
  total: number
}

export default function ArrowNavigation({ index, setIndex, total }: Props) {
  return (
    <div className="absolute inset-y-0 w-full flex justify-between items-center px-4 pointer-events-none">
      {index > 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          className="pointer-events-auto text-white hover:text-[#00ffc3] transition text-xl bg-black/40 backdrop-blur-sm p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
      )}
      {index < total - 1 && (
        <button
          onClick={() => setIndex(index + 1)}
          className="pointer-events-auto text-white hover:text-[#00ffc3] transition text-xl bg-black/40 backdrop-blur-sm p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  )
}
