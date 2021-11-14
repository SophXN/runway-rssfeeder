package usecases

import "github.com/sophxn/runway-rssfeeder/backend/entities"

type ReviewsRepository interface {
	GetAllReviews() ([]entities.Review, error)
}
