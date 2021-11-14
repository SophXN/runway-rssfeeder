import React from "react"
import { Review } from "../entities/Review"

export const ReviewItem: React.FC<Review> = ({
  reviewer,
  date,
  rating,
  comment,
}) => {
  return (
    <article className='review-item'>
      <h3>{reviewer}</h3>
      <h4>{date}</h4>
      <h4>{rating}/5</h4>
      <p>{comment}</p>
    </article>
  )
}
