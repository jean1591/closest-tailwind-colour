export const ColourPresenter = ({
  backgroundColour,
  colourLabel,
  label,
}: {
  backgroundColour: string
  colourLabel?: string
  label: string
}) => {
  return (
    <div>
      <p className="text-center text-sm uppercase text-slate-500">{label}</p>
      <p className="text-center font-medium uppercase">
        {colourLabel ?? backgroundColour}
      </p>

      <div
        className="mt-2 h-40 w-40 rounded-xl"
        style={{ backgroundColor: `${backgroundColour}` }}
      />
    </div>
  )
}
