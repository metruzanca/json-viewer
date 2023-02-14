import { FC } from "react";

type LongAnnoyingType = number | string | boolean | null

type StyledTextProps = { notString: boolean, value?: LongAnnoyingType }
const StyledText: FC<StyledTextProps> = ({ notString, value }) => {
  return notString ? (
    <span className="text-indigo-400">{value || 'null'}</span>
  ) : (
    <span className="text-yellow-100">"{value}"</span>
  )
}

type LeafProps = { value: LongAnnoyingType; name?: string; }
const Leaf: FC<LeafProps> = ({ value, name }) => {

  const type = typeof value
  const notString = type === 'object' || type === 'number' || type === 'boolean'

  // Keys of an object
  if (name) {
    return (
      <span key={name}>
        <span className="text-sky-300">"{name}"</span>: {(
          <StyledText notString={notString} value={value} />
        )}
      </span>
    )
  }
  // Values of an array
  return <StyledText notString={notString} value={value} />
}

export default Leaf