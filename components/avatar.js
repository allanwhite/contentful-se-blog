export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={`${picture.url}?w=96&h=96&fit=thumb&f=face&fm=jpg&q=50`}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
