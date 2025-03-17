import './index.css'

const locationList = [
  {
    label: 'Hyderabad',
    locationId: 'HYDERABAD',
  },
  {
    label: 'Bangalore',
    locationId: 'BANGALORE',
  },
  {
    label: 'Chennai',
    locationId: 'CHENNAI',
  },
  {
    label: 'Delhi',
    locationId: 'DELHI',
  },
  {
    label: 'Mumbai',
    locationId: 'MUMBAI',
  },
]

const Location = props => {
  const getLocation = () =>
    locationList.map(each => {
      const {onLocation} = props
      const OnChangeLocation = () => onLocation(each.locationId)

      return (
        <li className="li-type-container" key={each.locationId}>
          <input
            type="checkbox"
            id={each.locationId}
            onChange={OnChangeLocation}
            className="input-checkbox"
          />
          <label className="label" htmlFor={each.locationId}>
            {each.label}
          </label>
        </li>
      )
    })

  return (
    <div className="employment-container">
      <h1 className="employment-heading">Location</h1>
      <ul className="ul-type-container">{getLocation()}</ul>
    </div>
  )
}

export default Location
