import React from "react"
import { Review } from "../entities/Review"
import { ReviewItem } from "./ReviewItem"
import "./ReviewList.scss"

type Props = {
  reviews: Review[]
}

export const ReviewList: React.FC<Props> = ({ reviews }) => {
  return (
    <ul className='review-list'>
      {reviews.map((review, i) => {
        return (
          <li key={i}>
            <ReviewItem
              reviewer={review.reviewer}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
            />
          </li>
        )
      })}
    </ul>
  )
}
