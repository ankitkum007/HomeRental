import {categories} from "../data"
import "../pages/Styles/Listings.scss"

const Listings = () => {
  return (
    <div className="category-list">
      {categories?.map((category, index) => (
        <div className={`category`} key={index}>
          <div className="category-icon">{category.icon}</div>
          <p>{category.label}</p>
        </div>
))}
    </div>
  )
}

export default Listings