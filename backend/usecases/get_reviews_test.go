package usecases

import (
	"fmt"
	"testing"

	"github.com/sophxn/runway-rssfeeder/backend/entities"
)

type MockReviewRepo struct{}

func (MockReviewRepo) GetAllReviews() ([]entities.Review, error) {
	return nil, fmt.Errorf("Something Went Wrong")
}
func TestGetReviews(t *testing.T) {
	repo := new(MockReviewRepo)

	err := usecases.GetReviews(repo)

	if err != usecases.ErrInternal {
		t.Fatalf("Expected ErrInternal: Got %v", err)
	}
}
