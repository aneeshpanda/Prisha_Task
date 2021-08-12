export default function Example() {
  return (
    <div className="input">
      <label htmlFor="type" className="block text-sm font-medium text-white">
        Type of Insurance
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
          <select
            id="currency"
            name="currency"
            className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">
            <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">Car</option>
            <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">Bike</option>
            <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">Home</option>
          </select>
        </div>
      </div>
  )
}