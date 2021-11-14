package ui

import "github.com/sophxn/runway-rssfeeder/backend/entities"

type Service interface {
	GetAllReviews() ([]entities.Review, error)
}
