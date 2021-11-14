import React from "react"
import { Review } from "../entities/Review"
import "./ReviewItem.scss"

export const ReviewItem: React.FC<Review> = ({
  reviewer,
  date,
  rating,
  comment,
}) => {
  return (
    <div className='review-item'>
      <div>{reviewer}</div>
      <div>{date}</div>
      <div>{rating}/5</div>
      <div className='review-text'>{comment}</div>
    </div>
  )
}
