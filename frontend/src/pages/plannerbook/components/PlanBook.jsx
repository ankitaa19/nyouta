import React from 'react'
import '../style/PlanBook.scss'
import { useNavigate } from 'react-router-dom'

function PlanBook() {
    const productCategories = ["Wedding", "Management", "Guest Management"]
    const navigate = useNavigate();

    const ProductCard = ({ title = "Product Name Here" }) => (
        <div className="product-card" onClick={()=>navigate('/product')} >
            <div className="pc_card_container">
                <div className="product-design">
                    Design <br /> Here
                </div>
            </div>
            <div className="product-title">"{title}"</div>
        </div>
    )

    return (
        <div className="planner-book">
            <h2 className="planner-title">Planner Books</h2>

            <div className="categories">
                {productCategories.map((category, index) => (
                    <span key={index} className="category-item">
                        {category}
                        {index < productCategories.length - 1 && <span className="divider">|</span>}
                    </span>
                ))}
            </div>

            <div className="product-grid">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCard key={index} />
                ))}
            </div>
        </div>
    )
}

export default PlanBook
